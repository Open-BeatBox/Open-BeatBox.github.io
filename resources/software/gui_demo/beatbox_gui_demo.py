"""Interactive BEATBox GUI front-end demo with mock data.

This prototype is intentionally hardware-free. It sketches the software surfaces
visible in the reference screenshots:

- serial connection controls
- experiment setup and live status
- sensor and actuator indicators
- animal and stage metadata
- monitoring window with box tabs, task tabs, logs, reward history, and plots

Run with:
    python beatbox_gui_demo.py
"""

from __future__ import annotations

import random
import tkinter as tk
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from tkinter import ttk


BG = "#101923"
PANEL = "#172331"
PANEL_2 = "#1f2d3c"
BORDER = "#314357"
TEXT = "#e8f1f8"
MUTED = "#91a6b7"
GREEN = "#14b84a"
RED = "#ff2d2d"
YELLOW = "#f2c94c"
BLUE = "#5c7cfa"


@dataclass
class BoxState:
    box_id: int
    animal_name: str
    weight_g: int
    stage: int
    current_phase: str = "PHASE_WAIT_PELLET"
    total_rewards: int = 890
    rewards_24h: int = 120
    last_action: str = "nosepoke"
    feeder_alert: bool = False
    nb_rewards_for_plot: int = 50
    success_rate: list[float] = field(default_factory=list)
    lateralization: list[float] = field(default_factory=list)
    reversal: list[float] = field(default_factory=list)
    logs: list[str] = field(default_factory=list)
    reward_minutes: list[int] = field(default_factory=list)
    sensors: dict[str, bool] = field(default_factory=dict)
    actuators: dict[str, bool] = field(default_factory=dict)

    def __post_init__(self) -> None:
        if not self.success_rate:
            self.success_rate = [
                0.02,
                0.08,
                0.22,
                0.48,
                0.66,
                0.70,
                0.72,
                0.84,
                0.82,
                0.62,
                0.74,
                0.80,
                0.81,
            ]
        if not self.lateralization:
            self.lateralization = [0.45, 0.50, 0.47, 0.58, 0.62, 0.57, 0.53, 0.49]
        if not self.reversal:
            self.reversal = [0.78, 0.73, 0.60, 0.44, 0.38, 0.52, 0.66, 0.76]
        if not self.logs:
            base = datetime(2019, 8, 13, 19, 56, 52)
            events = [
                "Stage 5 - Nosepoke expected",
                "Stage 5 - Nosepoke",
                "Stage 5 - Success rate : 0.65",
                "Stage 5 - Target screen : right",
                "Stage 5 - Left screen touched. Trial failed",
                "Stage 5 - Aversive light activated",
                "Stage 5 - Nosepoke",
            ]
            self.logs = [
                f"{(base + timedelta(seconds=i * 82)).strftime('%d-%b-%Y %H:%M:%S')} Box{self.box_id} - {event}"
                for i, event in enumerate(events * 2)
            ]
        if not self.reward_minutes:
            self.reward_minutes = sorted(random.sample(range(0, 600), 34))
        if not self.sensors:
            self.sensors = {
                "Nose Poke": True,
                "Left Response": False,
                "Right Response": False,
                "Left Tunnel Crossing": True,
                "Right Tunnel Crossing": True,
                "Food Alert": False,
            }
        if not self.actuators:
            self.actuators = {
                "Reward": False,
                "Lights": False,
                "Red Light": False,
                "Left Visual Pattern": False,
                "Left Lines Pattern": False,
                "Left White Pattern": False,
                "Left Black Pattern": False,
                "Right Visual Pattern": False,
                "Right Lines Pattern": False,
                "Right White Pattern": False,
                "Right Black Pattern": False,
            }

    def tick(self) -> str | None:
        sensor = random.choice(list(self.sensors))
        self.sensors[sensor] = not self.sensors[sensor]
        if random.random() < 0.45:
            self.total_rewards += 1
            self.rewards_24h += 1
            minute = (self.reward_minutes[-1] + random.randint(4, 22)) % 720
            self.reward_minutes.append(minute)
            self.reward_minutes = self.reward_minutes[-50:]
            self.last_action = random.choice(["nosepoke", "left screen", "right screen"])
            value = min(0.96, max(0.0, self.success_rate[-1] + random.uniform(-0.08, 0.08)))
            self.success_rate.append(value)
            self.success_rate = self.success_rate[-30:]
            entry = (
                f"{datetime.now().strftime('%d-%b-%Y %H:%M:%S')} "
                f"Box{self.box_id} - Stage {self.stage} - Reward delivered"
            )
            self.logs.append(entry)
            self.logs = self.logs[-80:]
            return entry
        return None


class PlotCanvas(tk.Canvas):
    def __init__(self, master: tk.Misc, **kwargs: object) -> None:
        super().__init__(master, bg="#f9fbff", highlightthickness=1, highlightbackground="#c7ccd3", **kwargs)

    def draw_line_plot(self, values: list[float], labels: list[str] | None = None) -> None:
        self.delete("all")
        width = max(self.winfo_width(), 380)
        height = max(self.winfo_height(), 190)
        pad_l, pad_r, pad_t, pad_b = 42, 18, 16, 30
        plot_w = width - pad_l - pad_r
        plot_h = height - pad_t - pad_b

        for i in range(6):
            y = pad_t + i * plot_h / 5
            self.create_line(pad_l, y, width - pad_r, y, fill="#e8edf4")
            value = 1 - i / 5
            self.create_text(20, y, text=f"{value:.1f}", fill="#687782", font=("Segoe UI", 9))

        for i in range(5):
            x = pad_l + i * plot_w / 4
            self.create_line(x, pad_t, x, height - pad_b, fill="#eef2f6")

        if len(values) > 1:
            points: list[float] = []
            for idx, value in enumerate(values):
                x = pad_l + idx * plot_w / (len(values) - 1)
                y = pad_t + (1 - value) * plot_h
                points.extend([x, y])
            self.create_line(points, fill="#414fa3", width=3, smooth=True)

        if labels:
            for idx, label in enumerate(labels):
                x = pad_l + idx * plot_w / max(1, len(labels) - 1)
                self.create_text(x, height - 12, text=label, fill="#5d6b75", font=("Segoe UI", 9))

    def draw_reward_raster(self, reward_minutes: list[int]) -> None:
        self.delete("all")
        width = max(self.winfo_width(), 300)
        height = max(self.winfo_height(), 84)
        pad_l, pad_r, pad_t, pad_b = 24, 16, 14, 24
        self.create_rectangle(pad_l, pad_t, width - pad_r, height - pad_b, fill="#ffffff", outline="#cbd5df")
        for minute in reward_minutes[-50:]:
            x = pad_l + (minute / 720) * (width - pad_l - pad_r)
            self.create_oval(x - 2, height / 2 - 2, x + 2, height / 2 + 2, fill="#18a34a", outline="")
        for frac, label in [(2 / 12, "2 AM"), (4 / 12, "4 AM"), (6 / 12, "6 AM"), (8 / 12, "8 AM")]:
            x = pad_l + frac * (width - pad_l - pad_r)
            self.create_text(x, height - 9, text=label, fill="#6b7280", font=("Segoe UI", 8))
        self.create_text(width / 2, 8, text="Latest 50 rewards", fill="#1f2937", font=("Segoe UI", 9, "bold"))


class MonitoringWindow(tk.Toplevel):
    def __init__(self, app: "BeatboxDemo") -> None:
        super().__init__(app.root)
        self.app = app
        self.title("Monitoring window")
        self.geometry("780x500")
        self.minsize(680, 430)
        self.configure(bg="#edf3ea")
        self.box_tabs: ttk.Notebook | None = None
        self.plots: dict[tuple[int, str], PlotCanvas] = {}
        self.log_texts: dict[int, tk.Text] = {}
        self.reward_plots: dict[int, PlotCanvas] = {}
        self.metric_vars: dict[tuple[int, str], tk.StringVar] = {}
        self._build()
        self.refresh()

    def _build(self) -> None:
        style = ttk.Style(self)
        style.configure("Monitor.TNotebook", background="#e7eee4")
        style.configure("Monitor.TFrame", background="#e7eee4")
        style.configure("Monitor.TLabel", background="#e7eee4", foreground="#263238")
        style.configure("Monitor.TButton", padding=(10, 4))

        top = ttk.Frame(self, style="Monitor.TFrame")
        top.pack(fill="x", padx=8, pady=(6, 0))
        self.box_tabs = ttk.Notebook(top, style="Monitor.TNotebook")
        self.box_tabs.pack(side="left", fill="x", expand=True)
        ttk.Button(top, text="Refresh", command=self.refresh).pack(side="right", padx=(8, 0))

        for state in self.app.boxes:
            box_frame = ttk.Frame(self.box_tabs, style="Monitor.TFrame")
            self.box_tabs.add(box_frame, text=f"Box {state.box_id}")
            task_tabs = ttk.Notebook(box_frame, style="Monitor.TNotebook")
            task_tabs.pack(fill="both", expand=True, padx=6, pady=6)

            general = ttk.Frame(task_tabs, style="Monitor.TFrame")
            task_tabs.add(general, text="General")
            self._build_general(general, state)

            success = ttk.Frame(task_tabs, style="Monitor.TFrame")
            task_tabs.add(success, text="Success rate")
            self._build_plot_tab(success, state, "success")

            lateral = ttk.Frame(task_tabs, style="Monitor.TFrame")
            task_tabs.add(lateral, text="Lateralization")
            self._build_plot_tab(lateral, state, "lateral")

            reversal = ttk.Frame(task_tabs, style="Monitor.TFrame")
            task_tabs.add(reversal, text="Reversal task info.")
            self._build_plot_tab(reversal, state, "reversal")

    def _build_general(self, parent: ttk.Frame, state: BoxState) -> None:
        grid = ttk.Frame(parent, style="Monitor.TFrame")
        grid.pack(fill="both", expand=True, padx=8, pady=8)
        grid.columnconfigure(0, weight=0)
        grid.columnconfigure(1, weight=0)
        grid.columnconfigure(2, weight=1)

        metrics = ttk.Frame(grid, style="Monitor.TFrame")
        metrics.grid(row=0, column=0, sticky="nsew", padx=(0, 10))
        fields = [
            ("Overall time:", "overall"),
            ("Total rewards:", "total"),
            ("Rewards in last 24h:", "day"),
            ("Last action:", "last"),
            ("Feeder alert:", "alert"),
            ("Nb of rewards for plot:", "plot"),
        ]
        for row, (label, key) in enumerate(fields):
            ttk.Label(metrics, text=label, style="Monitor.TLabel").grid(row=row, column=0, sticky="w", pady=3)
            var = tk.StringVar()
            self.metric_vars[(state.box_id, key)] = var
            tk.Label(metrics, textvariable=var, width=16, anchor="e", bg="#f7faf5", relief="sunken").grid(
                row=row, column=1, sticky="ew", pady=3
            )
        reward_plot = PlotCanvas(metrics, height=94, width=300)
        reward_plot.grid(row=len(fields), column=0, columnspan=2, sticky="ew", pady=(10, 0))
        self.reward_plots[state.box_id] = reward_plot

        log_frame = ttk.Frame(grid, style="Monitor.TFrame")
        log_frame.grid(row=0, column=2, sticky="nsew")
        ttk.Label(log_frame, text="Logs:", style="Monitor.TLabel").pack(anchor="w")
        text = tk.Text(log_frame, height=16, width=58, font=("Segoe UI", 9), bg="#f7faf5", fg="#263238")
        text.pack(fill="both", expand=True)
        self.log_texts[state.box_id] = text

    def _build_plot_tab(self, parent: ttk.Frame, state: BoxState, key: str) -> None:
        controls = ttk.Frame(parent, style="Monitor.TFrame")
        controls.pack(fill="x", padx=8, pady=8)
        ttk.Label(controls, text="Number of trials to display:", style="Monitor.TLabel").pack(side="left")
        spin = ttk.Spinbox(controls, from_=50, to=5000, increment=50, width=9)
        spin.set("1000")
        spin.pack(side="left", padx=8)
        plot = PlotCanvas(parent, height=310)
        plot.pack(fill="both", expand=True, padx=8, pady=(0, 8))
        self.plots[(state.box_id, key)] = plot

    def refresh(self) -> None:
        labels = ["Aug 10 - 12:00", "Aug 11 - 12:00", "Aug 12 - 12:00", "Aug 13 - 12:00"]
        for state in self.app.boxes:
            values = {
                "overall": "6d 2h 58m 24s",
                "total": str(state.total_rewards),
                "day": str(state.rewards_24h),
                "last": state.last_action,
                "alert": "yes" if state.feeder_alert else "no",
                "plot": str(state.nb_rewards_for_plot),
            }
            for key, value in values.items():
                self.metric_vars[(state.box_id, key)].set(value)
            self.reward_plots[state.box_id].draw_reward_raster(state.reward_minutes)

            text = self.log_texts[state.box_id]
            text.configure(state="normal")
            text.delete("1.0", "end")
            text.insert("end", "\n".join(state.logs[-45:]))
            text.configure(state="disabled")
            text.see("end")

            self.plots[(state.box_id, "success")].draw_line_plot(state.success_rate, labels)
            self.plots[(state.box_id, "lateral")].draw_line_plot(state.lateralization, labels[: len(state.lateralization)])
            self.plots[(state.box_id, "reversal")].draw_line_plot(state.reversal, labels[: len(state.reversal)])


class BeatboxDemo:
    def __init__(self) -> None:
        self.root = tk.Tk()
        self.root.title("BEATBox GUI front-end demo")
        self.root.geometry("520x850")
        self.root.minsize(480, 720)
        self.root.configure(bg=BG)
        self.connected = tk.BooleanVar(value=False)
        self.running = tk.BooleanVar(value=False)
        self.selected_box = tk.IntVar(value=1)
        self.monitor: MonitoringWindow | None = None
        self.activity_log: list[str] = []
        self.boxes = [
            BoxState(1, "Pikachu", 23, 51),
            BoxState(2, "Eevee", 21, 44, current_phase="PHASE_NOSEPOKE"),
            BoxState(3, "Mew", 24, 36, current_phase="PHASE_SCREEN_CHOICE"),
            BoxState(4, "Bulbi", 20, 28, current_phase="PHASE_REWARD"),
        ]
        self.sensor_labels: dict[str, tk.Label] = {}
        self.actuator_labels: dict[str, tk.Label] = {}
        self.stage_var = tk.StringVar(value="51")
        self.trials_var = tk.StringVar(value="2000")
        self.interval_var = tk.StringVar(value="5")
        self.current_trial_var = tk.StringVar(value="0")
        self.phase_var = tk.StringVar(value=self.current_box.current_phase)
        self._setup_styles()
        self._build()
        self._refresh_ui()
        self._tick()

    @property
    def current_box(self) -> BoxState:
        return self.boxes[self.selected_box.get() - 1]

    def _setup_styles(self) -> None:
        style = ttk.Style(self.root)
        style.theme_use("clam")
        style.configure("Dark.TFrame", background=BG)
        style.configure("Panel.TFrame", background=PANEL, relief="flat")
        style.configure("Dark.TLabel", background=BG, foreground=TEXT)
        style.configure("Panel.TLabel", background=PANEL, foreground=TEXT)
        style.configure("Muted.TLabel", background=PANEL, foreground=MUTED)
        style.configure("Header.TLabel", background=PANEL_2, foreground=TEXT, font=("Segoe UI", 9, "bold"))
        style.configure("Dark.TButton", background=PANEL_2, foreground=TEXT, bordercolor=BORDER)
        style.map("Dark.TButton", background=[("active", "#28384a")])
        style.configure("Accent.TButton", background="#294b65", foreground=TEXT)
        style.configure("Red.TButton", background="#643030", foreground=TEXT)
        style.configure("Dark.TEntry", fieldbackground="#223244", foreground=TEXT, insertcolor=TEXT)
        style.configure("Dark.TCombobox", fieldbackground="#223244", background=PANEL_2, foreground=TEXT)
        style.configure("Dark.TCheckbutton", background=PANEL, foreground=TEXT)

    def _panel(self, parent: tk.Misc, title: str) -> ttk.Frame:
        outer = ttk.Frame(parent, style="Panel.TFrame")
        outer.pack(fill="x", padx=8, pady=5)
        ttk.Label(outer, text=title, style="Header.TLabel").pack(fill="x", padx=1, pady=(1, 5))
        return outer

    def _build(self) -> None:
        self._build_serial()
        self._build_experiment_setup()
        self._build_data()
        self._build_sensors()
        self._build_actuators()
        self._build_command()
        self._build_info()
        self._build_logs()

    def _build_serial(self) -> None:
        panel = self._panel(self.root, "Serial connection")
        row = ttk.Frame(panel, style="Panel.TFrame")
        row.pack(fill="x", padx=8, pady=(0, 8))
        ttk.Label(row, text="Port:", style="Panel.TLabel").pack(side="left")
        combo = ttk.Combobox(row, values=["/dev/ttyACM0", "COM3", "COM4"], width=17, style="Dark.TCombobox")
        combo.set("/dev/ttyACM0")
        combo.pack(side="left", padx=5)
        ttk.Button(row, text="Refresh", command=self._log_refresh, style="Dark.TButton").pack(side="left", padx=3)
        ttk.Button(row, text="Connect", command=self._toggle_connect, style="Accent.TButton").pack(side="left", padx=3)
        ttk.Button(row, text="Monitoring window", command=self._open_monitor, style="Dark.TButton").pack(side="right")

    def _build_experiment_setup(self) -> None:
        panel = self._panel(self.root, "Experiment Setup")
        row = ttk.Frame(panel, style="Panel.TFrame")
        row.pack(fill="x", padx=8, pady=(0, 8))
        ttk.Button(row, text="Select Folder", command=lambda: self._add_log("Selected mock data folder"), style="Dark.TButton").pack(side="left")
        ttk.Label(row, text="Stage", style="Panel.TLabel").pack(side="left", padx=(12, 4))
        ttk.Spinbox(row, from_=1, to=80, textvariable=self.stage_var, width=5, style="Dark.TEntry").pack(side="left")
        ttk.Label(row, text="Inter-trial (sec)", style="Panel.TLabel").pack(side="left", padx=(12, 4))
        ttk.Spinbox(row, from_=1, to=60, textvariable=self.interval_var, width=5, style="Dark.TEntry").pack(side="left")
        ttk.Label(row, text="Trials", style="Panel.TLabel").pack(side="left", padx=(12, 4))
        ttk.Entry(row, textvariable=self.trials_var, width=7, style="Dark.TEntry").pack(side="left")
        ttk.Button(row, text="Start Experiment", command=self._toggle_experiment, style="Accent.TButton").pack(side="left", padx=(12, 3))
        ttk.Button(row, text="Stop", command=self._stop_experiment, style="Red.TButton").pack(side="left")

    def _build_data(self) -> None:
        panel = self._panel(self.root, "Experiment Data")
        row = ttk.Frame(panel, style="Panel.TFrame")
        row.pack(fill="x", padx=8, pady=(0, 8))
        ttk.Label(row, text="Current trial:", style="Panel.TLabel").pack(side="left")
        ttk.Label(row, textvariable=self.current_trial_var, style="Muted.TLabel").pack(side="left", padx=20)

    def _build_sensors(self) -> None:
        panel = self._panel(self.root, "Sensors")
        for name in self.current_box.sensors:
            row = ttk.Frame(panel, style="Panel.TFrame")
            row.pack(fill="x", padx=8, pady=2)
            ttk.Label(row, text=name, style="Panel.TLabel").pack(side="left")
            led = tk.Label(row, text="●", bg=PANEL, fg=RED, font=("Segoe UI", 16, "bold"))
            led.pack(side="right")
            self.sensor_labels[name] = led

    def _build_actuators(self) -> None:
        panel = self._panel(self.root, "Actuators")
        top = ttk.Frame(panel, style="Panel.TFrame")
        top.pack(fill="x", padx=8, pady=3)
        ttk.Button(top, text="Reward", command=lambda: self._toggle_actuator("Reward"), style="Dark.TButton").pack(fill="x")
        self.actuator_labels["Reward"] = tk.Label(top, text="●", bg=PANEL, fg=RED, font=("Segoe UI", 16, "bold"))
        self.actuator_labels["Reward"].place(relx=0.98, rely=0.5, anchor="e")

        checks = ttk.Frame(panel, style="Panel.TFrame")
        checks.pack(fill="x", padx=8, pady=(0, 5))
        for name in ["Lights", "Red Light"]:
            ttk.Checkbutton(
                checks,
                text=name,
                style="Dark.TCheckbutton",
                command=lambda n=name: self._toggle_actuator(n),
            ).pack(anchor="w")

        displays = ttk.Frame(panel, style="Panel.TFrame")
        displays.pack(fill="x", padx=8, pady=(3, 8))
        for col, side in enumerate(["Left Display", "Right Display"]):
            frame = ttk.Frame(displays, style="Panel.TFrame")
            frame.grid(row=0, column=col, sticky="nsew", padx=(0, 12) if col == 0 else (12, 0))
            displays.columnconfigure(col, weight=1)
            ttk.Label(frame, text=side, style="Panel.TLabel").pack(anchor="w")
            prefix = "Left" if side.startswith("Left") else "Right"
            for name in [f"{prefix} Visual Pattern", f"{prefix} Lines Pattern", f"{prefix} White Pattern", f"{prefix} Black Pattern"]:
                row = ttk.Frame(frame, style="Panel.TFrame")
                row.pack(fill="x", pady=1)
                ttk.Button(
                    row,
                    text=name.replace(prefix + " ", ""),
                    command=lambda n=name: self._toggle_actuator(n),
                    style="Dark.TButton",
                ).pack(side="left", fill="x", expand=True)
                led = tk.Label(row, text="●", bg=PANEL, fg=RED, font=("Segoe UI", 13, "bold"))
                led.pack(side="right")
                self.actuator_labels[name] = led

    def _build_command(self) -> None:
        panel = self._panel(self.root, "Serial Send Command")
        row = ttk.Frame(panel, style="Panel.TFrame")
        row.pack(fill="x", padx=8, pady=(0, 8))
        entry = ttk.Entry(row, style="Dark.TEntry")
        entry.insert(0, "TEST_REWARD_LOOP")
        entry.pack(side="left", fill="x", expand=True)
        ttk.Button(row, text="Send", command=lambda: self._add_log(f"Sent command: {entry.get()}"), style="Dark.TButton").pack(side="left", padx=(5, 0))

    def _build_info(self) -> None:
        panel = self._panel(self.root, "Animal information")
        panel.columnconfigure(0, weight=1)
        panel.columnconfigure(1, weight=1)
        left = ttk.Frame(panel, style="Panel.TFrame")
        right = ttk.Frame(panel, style="Panel.TFrame")
        left.pack(side="left", fill="both", expand=True, padx=8, pady=(0, 8))
        right.pack(side="left", fill="both", expand=True, padx=8, pady=(0, 8))
        self.animal_text = tk.Text(left, height=6, bg=PANEL, fg=TEXT, relief="flat", font=("Segoe UI", 9))
        self.animal_text.pack(fill="both", expand=True)
        self.stage_text = tk.Text(right, height=6, bg=PANEL, fg=TEXT, relief="flat", font=("Segoe UI", 9))
        self.stage_text.pack(fill="both", expand=True)

    def _build_logs(self) -> None:
        panel = self._panel(self.root, "Logs")
        self.log_box = tk.Text(panel, height=8, bg="#0b141d", fg="#d7e5ee", insertbackground=TEXT, font=("Consolas", 8))
        self.log_box.pack(fill="both", expand=True, padx=8, pady=(0, 8))
        scrollbar = ttk.Scrollbar(self.log_box, command=self.log_box.yview)
        self.log_box.configure(yscrollcommand=scrollbar.set)

    def _toggle_connect(self) -> None:
        self.connected.set(not self.connected.get())
        self._add_log("Connected to mock serial device" if self.connected.get() else "Disconnected from mock serial device")

    def _toggle_experiment(self) -> None:
        if not self.connected.get():
            self._add_log("Cannot start experiment: mock serial device is disconnected")
            return
        self.running.set(not self.running.get())
        self._add_log("Experiment started" if self.running.get() else "Experiment paused")

    def _stop_experiment(self) -> None:
        self.running.set(False)
        self._add_log("Experiment stopped")

    def _toggle_actuator(self, name: str) -> None:
        box = self.current_box
        box.actuators[name] = not box.actuators.get(name, False)
        if name == "Reward" and box.actuators[name]:
            box.total_rewards += 1
            box.rewards_24h += 1
            self._add_log("Manual reward delivered")
        else:
            self._add_log(f"{name} set to {'ON' if box.actuators[name] else 'OFF'}")
        self._refresh_ui()

    def _open_monitor(self) -> None:
        if self.monitor and self.monitor.winfo_exists():
            self.monitor.lift()
            self.monitor.refresh()
            return
        self.monitor = MonitoringWindow(self)

    def _log_refresh(self) -> None:
        self._add_log("Serial ports refreshed: /dev/ttyACM0, COM3, COM4")

    def _add_log(self, message: str) -> None:
        entry = f"{datetime.now().strftime('%Y-%m-%d %H:%M:%S')} - {message}"
        self.activity_log.append(entry)
        self.activity_log = self.activity_log[-120:]
        if hasattr(self, "log_box"):
            self.log_box.configure(state="normal")
            self.log_box.delete("1.0", "end")
            self.log_box.insert("end", "\n".join(self.activity_log))
            self.log_box.configure(state="disabled")
            self.log_box.see("end")

    def _refresh_ui(self) -> None:
        box = self.current_box
        self.phase_var.set(box.current_phase)
        for name, active in box.sensors.items():
            self.sensor_labels[name].configure(fg=GREEN if active else RED)
        for name, led in self.actuator_labels.items():
            led.configure(fg=GREEN if box.actuators.get(name, False) else RED)
        self.animal_text.configure(state="normal")
        self.animal_text.delete("1.0", "end")
        self.animal_text.insert(
            "end",
            f"Animal Name:     {box.animal_name}\n"
            f"Weight (g):      {box.weight_g}\n"
            "Box:             1\n"
            "Sex:             Male\n"
            "Light Cycle:     White",
        )
        self.animal_text.configure(state="disabled")
        self.stage_text.configure(state="normal")
        self.stage_text.delete("1.0", "end")
        self.stage_text.insert(
            "end",
            f"Stage:Phase Info\n"
            f"Current Stage:   {box.stage}\n"
            f"Current Phase:   {box.current_phase}",
        )
        self.stage_text.configure(state="disabled")

    def _tick(self) -> None:
        if self.running.get():
            trial = int(self.current_trial_var.get() or "0") + 1
            self.current_trial_var.set(str(trial))
            box = self.current_box
            entry = box.tick()
            if entry:
                self._add_log(entry)
        if self.monitor and self.monitor.winfo_exists():
            self.monitor.refresh()
        self._refresh_ui()
        self.root.after(1200, self._tick)

    def run(self) -> None:
        self._add_log("BEATBox GUI demo loaded with mock data")
        self.root.mainloop()


def main() -> None:
    BeatboxDemo().run()


if __name__ == "__main__":
    main()
