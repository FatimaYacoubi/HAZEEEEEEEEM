// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url:'http://localhost:5001/api/authentication',
  ClientHost:"http://localhost:5000/api/authentication",
  AdminHost:"http://localhost:5000/api/admin",
  ManagerHost:"http://localhost:5000/api/internal",
  userHost:"http://localhost:5000/api/user",
  host:'http://localhost:5000'
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
