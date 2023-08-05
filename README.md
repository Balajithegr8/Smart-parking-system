# Smart Parking System

The Smart Parking System is an innovative software solution designed to optimize parking spot utilization and improve the parking experience. It allows users to check parking availability and reserve parking spots in real-time, reducing time spent on parking and improving overall efficiency.

## Features 

- Real-Time Parking Availability: Check the availability of parking slots in real-time.
- Reservation: Reserve your parking slot at your preferred location.
- Alerts: Get reminded when your reservation time is approaching.

## Usage

To check for parking availability, run the application and navigate to the Parking Availability page. Here, you can view the current state of all parking slots.

To reserve a parking slot:

1. Navigate to the Reservations page.
2. Choose your preferred parking slot and reservation timings.
3. Enter Your Licence Number and click on "Book Now" to finalize your reservation.
4. While Exiting the parking Release the slot from the dashboard

## Technology Stack

The Smart Parking System is built using modern web technologies. Our tech stack includes:

- **Front-end:** React for the admin site, and React Native for the mobile application.
- **Back-end:** Node.js for server operations and API endpoints.
- **Database:** MongoDB for data storage.
- **API Communication:** RESTful APIs for frontend and backend communication.

## For Developers

To add a new feature, changes will be required in the below files:
- src->components
- scenes->make a new folder->index.js
- api.js
- App.js
- controllers

## Contributors
The project is only possible due to the effort of these people, thanks for your wonderful contributions!

| [<img src="https://github.com/Dhruvch1244.png?size=50" width="50"/>](https://github.com/Dhruvch1244)| [<img src="https://github.com/SHAY2407.png?size=50" width="50"/>](https://github.com/SHAY2407) | [<img src="https://github.com/Balajithegr8.png?size=50" width="50"/>](https://github.com/Balajithegr8) |
| -------- | -------- | -------- |

Thanks.

```
Smart-parking-system
├─ .idea
│  ├─ misc.xml
│  ├─ modules.xml
│  ├─ Smart-parking-system.iml
│  └─ vcs.xml
├─ AdminDashboard
│  ├─ client
│  │  ├─ .env
│  │  ├─ jsconfig.json
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ public
│  │  │  ├─ android-chrome-192x192.png
│  │  │  ├─ android-chrome-228x228.png
│  │  │  ├─ android-chrome-512x512.png
│  │  │  ├─ apple-touch-icon.png
│  │  │  ├─ browserconfig.xml
│  │  │  ├─ favicon-16x16.png
│  │  │  ├─ favicon-32x32.png
│  │  │  ├─ favicon-76x76.png
│  │  │  ├─ favicon.ico
│  │  │  ├─ index.html
│  │  │  ├─ manifest.json
│  │  │  ├─ robots.txt
│  │  │  ├─ site.webmanifest
│  │  │  └─ _redirects
│  │  └─ src
│  │     ├─ App.js
│  │     ├─ assets
│  │     │  ├─ profile.jpeg
│  │     │  ├─ profile.jpg
│  │     │  ├─ profile1.jpeg
│  │     │  └─ profile_.jpeg
│  │     ├─ components
│  │     │  ├─ Bg.css
│  │     │  ├─ Bg.js
│  │     │  ├─ BreakdownChart.jsx
│  │     │  ├─ DataGridCustomColumnMenu.jsx
│  │     │  ├─ DataGridCustomToolbar.jsx
│  │     │  ├─ FlexBetween.jsx
│  │     │  ├─ Header.jsx
│  │     │  ├─ index.js
│  │     │  ├─ Login
│  │     │  │  ├─ FloatingWindow1.css
│  │     │  │  ├─ FloatingWindow1.js
│  │     │  │  ├─ Login.css
│  │     │  │  └─ Login.js
│  │     │  ├─ Navbar.jsx
│  │     │  ├─ OverviewChart.jsx
│  │     │  ├─ Register
│  │     │  │  ├─ FloatingWindow.css
│  │     │  │  ├─ FloatingWindow.js
│  │     │  │  ├─ Register.css
│  │     │  │  └─ Register.js
│  │     │  ├─ Sidebar.jsx
│  │     │  └─ StatBox.jsx
│  │     ├─ index.css
│  │     ├─ index.js
│  │     ├─ scenes
│  │     │  ├─ admin
│  │     │  │  └─ index.jsx
│  │     │  ├─ breakdown
│  │     │  │  └─ index.jsx
│  │     │  ├─ cctv
│  │     │  │  ├─ index.jsx
│  │     │  │  ├─ videoJS.js
│  │     │  │  └─ videos
│  │     │  │     └─ example.mp4
│  │     │  ├─ daily
│  │     │  │  └─ index.jsx
│  │     │  ├─ dashboard
│  │     │  │  └─ index.jsx
│  │     │  ├─ index.js
│  │     │  ├─ layout
│  │     │  │  └─ index.jsx
│  │     │  ├─ location
│  │     │  │  └─ index.jsx
│  │     │  ├─ monthly
│  │     │  │  └─ index.jsx
│  │     │  ├─ overview
│  │     │  │  └─ index.jsx
│  │     │  ├─ performance
│  │     │  │  └─ index.jsx
│  │     │  ├─ products
│  │     │  │  └─ index.jsx
│  │     │  ├─ slots
│  │     │  │  └─ index.jsx
│  │     │  ├─ transactions
│  │     │  │  └─ index.jsx
│  │     │  └─ users
│  │     │     └─ index.jsx
│  │     ├─ state
│  │     │  ├─ api.js
│  │     │  ├─ geoData.js
│  │     │  └─ index.js
│  │     ├─ static
│  │     │  ├─ 171.jpg
│  │     │  ├─ icon.svg
│  │     │  └─ R.jpeg
│  │     └─ theme.js
│  └─ server
│     ├─ .env
│     ├─ controllers
│     │  ├─ client.js
│     │  ├─ general.js
│     │  ├─ management.js
│     │  └─ sales.js
│     ├─ data
│     │  └─ index.js
│     ├─ index.js
│     ├─ middlewares
│     │  └─ rateLimiter.js
│     ├─ models
│     │  ├─ AffiliateStat.js
│     │  ├─ CCTV.js
│     │  ├─ Locations.js
│     │  ├─ OverallStat.js
│     │  ├─ Product.js
│     │  ├─ ProductStat.js
│     │  ├─ Slots.js
│     │  ├─ Transaction.js
│     │  └─ User.js
│     ├─ package-lock.json
│     ├─ package.json
│     ├─ routes
│     │  ├─ client.js
│     │  ├─ general.js
│     │  ├─ management.js
│     │  └─ sales.js
│     └─ yarn.lock
├─ onspot_spa
│  ├─ onspot_spa_backend
│  │  ├─ .env
│  │  ├─ index.js
│  │  ├─ package-lock.json
│  │  └─ package.json
│  └─ onspot_spa_frontend
│     ├─ package-lock.json
│     ├─ package.json
│     ├─ public
│     │  ├─ index.html
│     │  ├─ manifest.json
│     │  └─ robots.txt
│     ├─ README.md
│     └─ src
│        ├─ App.css
│        ├─ App.js
│        ├─ components
│        │  ├─ Bg.css
│        │  ├─ Bg.js
│        │  ├─ Login
│        │  │  ├─ FloatingWindow1.css
│        │  │  ├─ FloatingWindow1.js
│        │  │  ├─ Login.css
│        │  │  └─ Login.js
│        │  ├─ Register
│        │  │  ├─ FloatingWindow.css
│        │  │  ├─ FloatingWindow.js
│        │  │  ├─ Register.css
│        │  │  └─ Register.js
│        │  └─ Test
│        │     └─ Test.js
│        ├─ index.css
│        ├─ index.js
│        └─ static
│           ├─ 171.jpg
│           └─ icon.svg
├─ package-lock.json
├─ package.json
├─ README.md
├─ SmartParkingApp
│  ├─ .idea
│  │  ├─ gradle.xml
│  │  ├─ misc.xml
│  │  ├─ modules.xml
│  │  ├─ SmartParkingApp.iml
│  │  └─ vcs.xml
│  ├─ App.js
│  ├─ app.json
│  ├─ assets
│  │  ├─ adaptive-icon.png
│  │  ├─ backgroud.gif
│  │  ├─ bell.svg
│  │  ├─ favicon.png
│  │  ├─ icon.png
│  │  └─ splash.png
│  ├─ babel.config.js
│  ├─ Components
│  │  ├─ BottomNavBar.js
│  │  ├─ Dashboard
│  │  │  ├─ CalendarScreen.js
│  │  │  ├─ CurrentBookingComponent.js
│  │  │  └─ DHeader.js
│  │  ├─ Enforcement
│  │  │  ├─ EnforcementDetails.js
│  │  │  └─ EnforcementHeader.js
│  │  ├─ OutOfOffice
│  │  │  ├─ OutOfOfficeDetails.js
│  │  │  └─ OutOfOfficeHeader.js
│  │  ├─ ParkingReq
│  │  │  ├─ Cal.js
│  │  │  ├─ ParkingCalendar.js
│  │  │  ├─ ParkingOption.js
│  │  │  ├─ ParkingRequestScreen.js
│  │  │  └─ RequestParking.js
│  │  ├─ Profile
│  │  │  ├─ ProfileC.js
│  │  │  ├─ ProfileDetails.js
│  │  │  └─ ProfileHeader.js
│  │  ├─ Signin
│  │  │  ├─ SigninBottom.js
│  │  │  ├─ SigninHeader.js
│  │  │  └─ SigninInput.js
│  │  └─ TodayAvail
│  │     ├─ TodayAvailBack.js
│  │     ├─ TodayAvailBody.js
│  │     ├─ TodayAvailComp.js
│  │     └─ TodayAvailHead.js
│  ├─ Dashboard.js
│  ├─ Enforcement.js
│  ├─ indexpage.js
│  ├─ OutOfOffice.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ ParkingRequest.js
│  ├─ Profile.js
│  └─ TodayAvail.js
└─ SmartParkingFlutterApp
   └─ frontend
      └─ flutter.todo.flex
         ├─ .metadata
         ├─ .vscode
         │  └─ settings.json
         ├─ analysis_options.yaml
         ├─ android
         │  ├─ app
         │  │  ├─ build.gradle
         │  │  └─ src
         │  │     ├─ debug
         │  │     │  └─ AndroidManifest.xml
         │  │     ├─ main
         │  │     │  ├─ AndroidManifest.xml
         │  │     │  ├─ kotlin
         │  │     │  │  └─ com
         │  │     │  │     └─ mongodb
         │  │     │  │        └─ flutter_todo
         │  │     │  │           └─ MainActivity.kt
         │  │     │  └─ res
         │  │     │     ├─ drawable
         │  │     │     │  └─ launch_background.xml
         │  │     │     ├─ drawable-v21
         │  │     │     │  └─ launch_background.xml
         │  │     │     ├─ mipmap-hdpi
         │  │     │     │  └─ ic_launcher.png
         │  │     │     ├─ mipmap-mdpi
         │  │     │     │  └─ ic_launcher.png
         │  │     │     ├─ mipmap-xhdpi
         │  │     │     │  └─ ic_launcher.png
         │  │     │     ├─ mipmap-xxhdpi
         │  │     │     │  └─ ic_launcher.png
         │  │     │     ├─ mipmap-xxxhdpi
         │  │     │     │  └─ ic_launcher.png
         │  │     │     ├─ values
         │  │     │     │  └─ styles.xml
         │  │     │     └─ values-night
         │  │     │        └─ styles.xml
         │  │     └─ profile
         │  │        └─ AndroidManifest.xml
         │  ├─ build.gradle
         │  ├─ gradle
         │  │  └─ wrapper
         │  │     └─ gradle-wrapper.properties
         │  ├─ gradle.properties
         │  └─ settings.gradle
         ├─ assets
         │  └─ config
         │     └─ atlasConfig.json
         ├─ ios
         │  ├─ Flutter
         │  │  ├─ AppFrameworkInfo.plist
         │  │  ├─ Debug.xcconfig
         │  │  └─ Release.xcconfig
         │  ├─ Podfile
         │  ├─ Podfile.lock
         │  ├─ Runner
         │  │  ├─ AppDelegate.swift
         │  │  ├─ Assets.xcassets
         │  │  │  ├─ AppIcon.appiconset
         │  │  │  │  ├─ Contents.json
         │  │  │  │  ├─ Icon-App-1024x1024@1x.png
         │  │  │  │  ├─ Icon-App-20x20@1x.png
         │  │  │  │  ├─ Icon-App-20x20@2x.png
         │  │  │  │  ├─ Icon-App-20x20@3x.png
         │  │  │  │  ├─ Icon-App-29x29@1x.png
         │  │  │  │  ├─ Icon-App-29x29@2x.png
         │  │  │  │  ├─ Icon-App-29x29@3x.png
         │  │  │  │  ├─ Icon-App-40x40@1x.png
         │  │  │  │  ├─ Icon-App-40x40@2x.png
         │  │  │  │  ├─ Icon-App-40x40@3x.png
         │  │  │  │  ├─ Icon-App-60x60@2x.png
         │  │  │  │  ├─ Icon-App-60x60@3x.png
         │  │  │  │  ├─ Icon-App-76x76@1x.png
         │  │  │  │  ├─ Icon-App-76x76@2x.png
         │  │  │  │  └─ Icon-App-83.5x83.5@2x.png
         │  │  │  └─ LaunchImage.imageset
         │  │  │     ├─ Contents.json
         │  │  │     ├─ LaunchImage.png
         │  │  │     ├─ LaunchImage@2x.png
         │  │  │     ├─ LaunchImage@3x.png
         │  │  │     └─ README.md
         │  │  ├─ Base.lproj
         │  │  │  ├─ LaunchScreen.storyboard
         │  │  │  └─ Main.storyboard
         │  │  ├─ Info.plist
         │  │  └─ Runner-Bridging-Header.h
         │  ├─ Runner.xcodeproj
         │  │  ├─ project.pbxproj
         │  │  ├─ project.xcworkspace
         │  │  │  ├─ contents.xcworkspacedata
         │  │  │  └─ xcshareddata
         │  │  │     ├─ IDEWorkspaceChecks.plist
         │  │  │     └─ WorkspaceSettings.xcsettings
         │  │  └─ xcshareddata
         │  │     └─ xcschemes
         │  │        └─ Runner.xcscheme
         │  └─ Runner.xcworkspace
         │     ├─ contents.xcworkspacedata
         │     └─ xcshareddata
         │        ├─ IDEWorkspaceChecks.plist
         │        └─ WorkspaceSettings.xcsettings
         ├─ lib
         │  ├─ components
         │  │  ├─ app_bar.dart
         │  │  ├─ create_item.dart
         │  │  ├─ modify_item.dart
         │  │  ├─ todo_item.dart
         │  │  ├─ todo_list.dart
         │  │  └─ widgets.dart
         │  ├─ Dashboard
         │  │  ├─ BottomNavbar.dart
         │  │  ├─ Calender.dart
         │  │  └─ Topbar.dart
         │  ├─ main.dart
         │  ├─ ParkingScreen
         │  │  └─ ParkingscreenHead.dart
         │  ├─ realm
         │  │  ├─ app_services.dart
         │  │  ├─ realm_services.dart
         │  │  ├─ schemas.dart
         │  │  └─ schemas.g.dart
         │  ├─ screens
         │  │  ├─ Dashboard.dart
         │  │  ├─ Enforcement.dart
         │  │  ├─ homepage.dart
         │  │  ├─ log_in.dart
         │  │  ├─ OutofOffice.dart
         │  │  ├─ ParkingScreen.dart
         │  │  └─ Profile.dart
         │  └─ theme.dart
         ├─ linux
         │  ├─ CMakeLists.txt
         │  ├─ flutter
         │  │  ├─ CMakeLists.txt
         │  │  ├─ generated_plugins.cmake
         │  │  ├─ generated_plugin_registrant.cc
         │  │  └─ generated_plugin_registrant.h
         │  ├─ main.cc
         │  ├─ my_application.cc
         │  └─ my_application.h
         ├─ macos
         │  ├─ Flutter
         │  │  ├─ Flutter-Debug.xcconfig
         │  │  ├─ Flutter-Release.xcconfig
         │  │  └─ GeneratedPluginRegistrant.swift
         │  ├─ Podfile
         │  ├─ Podfile.lock
         │  ├─ Runner
         │  │  ├─ AppDelegate.swift
         │  │  ├─ Assets.xcassets
         │  │  │  └─ AppIcon.appiconset
         │  │  │     ├─ app_icon_1024.png
         │  │  │     ├─ app_icon_128.png
         │  │  │     ├─ app_icon_16.png
         │  │  │     ├─ app_icon_256.png
         │  │  │     ├─ app_icon_32.png
         │  │  │     ├─ app_icon_512.png
         │  │  │     ├─ app_icon_64.png
         │  │  │     └─ Contents.json
         │  │  ├─ Base.lproj
         │  │  │  └─ MainMenu.xib
         │  │  ├─ Configs
         │  │  │  ├─ AppInfo.xcconfig
         │  │  │  ├─ Debug.xcconfig
         │  │  │  ├─ Release.xcconfig
         │  │  │  └─ Warnings.xcconfig
         │  │  ├─ DebugProfile.entitlements
         │  │  ├─ Info.plist
         │  │  ├─ MainFlutterWindow.swift
         │  │  └─ Release.entitlements
         │  ├─ Runner.xcodeproj
         │  │  ├─ project.pbxproj
         │  │  ├─ project.xcworkspace
         │  │  │  └─ xcshareddata
         │  │  │     └─ IDEWorkspaceChecks.plist
         │  │  └─ xcshareddata
         │  │     └─ xcschemes
         │  │        └─ Runner.xcscheme
         │  └─ Runner.xcworkspace
         │     ├─ contents.xcworkspacedata
         │     └─ xcshareddata
         │        └─ IDEWorkspaceChecks.plist
         ├─ pubspec.lock
         ├─ pubspec.yaml
         ├─ README.md
         ├─ test
         │  └─ widget_test.dart
         └─ windows
            ├─ CMakeLists.txt
            ├─ flutter
            │  ├─ CMakeLists.txt
            │  ├─ generated_plugins.cmake
            │  ├─ generated_plugin_registrant.cc
            │  └─ generated_plugin_registrant.h
            └─ runner
               ├─ CMakeLists.txt
               ├─ flutter_window.cpp
               ├─ flutter_window.h
               ├─ main.cpp
               ├─ resource.h
               ├─ resources
               │  └─ app_icon.ico
               ├─ runner.exe.manifest
               ├─ Runner.rc
               ├─ utils.cpp
               ├─ utils.h
               ├─ win32_window.cpp
               └─ win32_window.h

```