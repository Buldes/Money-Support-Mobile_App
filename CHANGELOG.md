# Changelog
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/).

## [0.2.2 Early Acess] - 2024-04-02

- [Download APK Money Support 0.2.2 - Early Acess](https://expo.dev/artifacts/eas/uUEx7o1vacu4HhtNK2K7KV.apk)
 
### Changed
- When calculating the avarge Income/Expenditures, it uses now the total Months since the first Entry (max: 12 Months) except of 12 all the time

 ### Fixed
 - *Current Month Income* and *Avarge Incom* not updating, when adding new Entry
 - for the calculation of *Avarge Expenditures* and *Avarge Income* it didn't uses Data from the last year, only the curent year

## [0.2.1 Early Acess] - 2024-03-19
- [Download APK Money Support 0.2.1 - Early Acess](https://expo.dev/artifacts/eas/xkcTCGAqzREEWVPhHBsKW8.apk)


Small update, that added some few features. 

The new features can cause **more loading time**, because everything is calculated at the beginning, when you start the app, or when you add a new entry. The calculation time is based on youre device and amount of entry in the last 12 months, so it can vary a lot. 

You can enable/disable this feature, if you want, but I would be happy if you **give them a testet and bring feedbag.**
 
### Added
**Main Menu**
- Info Box
    - Current Month Expenditures
    - Avarge Expenditures of last 12 onths
    - Current Month Income
    - Avarge Income of last 12 onths

**Settings**
- enable/disable new features written above
 
### Changed
- used wrong version for Money Support 1.0 Early Acess. Changed (not in app) to 0.1.1 Early Acess

 
