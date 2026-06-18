# BEATBox GUI Front-End Demo

This is a hardware-free Python mock-up of the BEATBox graphical interface. It is intended for design review and software planning before the real hardware/API integration is finalized.

Run from this folder:

```powershell
python beatbox_gui_demo.py
```

What is interactive:

- Mock serial connection and experiment start/stop controls
- Live sensor status lights
- Manual actuator controls, including reward delivery
- Animal and stage metadata panels
- Activity log with generated events
- Separate monitoring window with Box 1-4 tabs
- General, success-rate, lateralization, and reversal-task views
- Mock reward raster and performance plots

The demo uses only the Python standard library (`tkinter`) and does not connect to hardware.
