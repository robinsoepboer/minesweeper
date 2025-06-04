# Minesweeper

A build of the ever popular game minesweeper in Angular 20 and TypeScript. 

**Playable version:** 
Check out a playable version [here!](http://robinsoepboer.com/minesweeper)

**Requirements**

- node/npm
- Angular CLI
- yarn

## Angular 20 Upgrade

This project has been upgraded from Angular 4 to Angular 20.

### Upgrade Summary

#### Dependencies Updated
- Updated all Angular packages from 4.2.4 to 20.0.0
- Removed deprecated @angular/http package
- Updated RxJS from 5.4.2 to 7.8.1
- Updated Zone.js from 0.8.14 to 0.14.4
- Added tslib 2.6.2 (required for Angular)
- Updated TypeScript from 2.3.3 to 5.4.2
- Updated all testing libraries to their latest versions

#### Configuration Updates
- Updated tsconfig.json with modern TypeScript settings
- Updated polyfills.ts to remove outdated polyfills
- Updated app.module.ts to use modern Angular patterns
- Updated main.ts to use the new bootstrapping method
- Fixed deprecated code patterns (like event.keyCode)
- Added proper type annotations throughout the codebase

## Running the Application

To run the application:

```
npm install
ng serve
```

**Changelog**
- version 1: Initial build with angular1/javascript
- version 2: Rebuild to incorporate angular styleguide and best practices 
- version 3: Rebuild to Angular2/TypeScript
- version 4: Upgraded to Angular 20
