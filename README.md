![publish_3](DocImages/result_set.png)

### Download the repo code from https://github.com/keithgb/iTrellis-Demo

#### Open in Visual Studio 2019 and at the solution level right click and select Restore NuGet packages.

![restore](DocImages/nu_get_restore.png)


#### Create a Site and Application in IIS. e.g. iTrellis/Demo edit bindings and set port to 5000

![create](DocImages/site_create_1.png)


#### Create a IIS Profile at Build > Publish

![publish_1](DocImages/publish_profile_1.png)

![publish_2](DocImages/publish_profile_2.png)

#### Click Publish to deploy to IIS

![publish_3](DocImages/publish_profile_3.png)

#### Both API and Site should be configured to ports 5000,5001 and point to dist folder generated by ng build via the publish to IIS.

![publish_4](DocImages/website_port.png)

##### IIS Bindings

![iis_2](DocImages/site_bindings.png)

##### IIS Path (dist folder)

![iis_3](DocImages/iis_path.png)

#### At Site location click the executable iTrellis-Demo.exe and verify listening on the correct ports

![publish_3](DocImages/execute_core_app.png)


#### Finally Navigate to https://localhost:5001/vehicledata