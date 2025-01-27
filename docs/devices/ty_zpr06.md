---
title: "Tuya PIR Sensor, Model No. TY-ZPR06"
description: "Integrate Tuya TY-ZPR06"
pageClass: device-page
---
# TuYa TY-ZPR06

|     |     |
|-----|-----|
| Model | TY-ZPR06  |
| Vendor  | Tuya  |
| Description | PIR sensor |
| Exposes | battery, occupancy, battery_low, tamper, linkquality |
| Picture | ![Tuya TY-ZPR06](https://www.zigbee2mqtt.io/images/devices/ty_zpr06.jpg) |

## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Battery_low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery_low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

