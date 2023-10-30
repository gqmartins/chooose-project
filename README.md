
# CHOOOSE Tasks

The repo has two folders, **backend** and **frontend**, each of them contain the solution for the corresponding task.

### Backend
For the backend you can open the solution with Visual Studio, or your preferred IDE, and run it there. 

Alternatively, inside the **backend** folder and depending on your operating system,  you can the following commands to create the .dll:
- **Windows**: dotnet publish -c Release -r win10-x64 -p:PublishSingleFile=True --self-contained True
- **Mac**: dotnet publish -c Release -r osx-x64 -p:PublishSingleFile=True --self-contained True
- **Linux**: dotnet publish -c Release -r linux-x64 -p:PublishSingleFile=True --self-contained True

And then the following to run the program:
- **Windows**: dotnet ./bin/Debug/net6.0/win10-x64/WorkdayNet.dll
- **Mac**: dotnet ./bin/Debug/net6.0/osx-x64/WorkdayNet.dll
- **Linux**: dotnet ./bin/Debug/net6.0/linux-x64/WorkdayNet.dll 

**Note:** I only tried to run on Windows, so others might fail.

### Frontend
The frontend has a mock server located inside the **mock-server** folder. In order to run the mock server use the commands:
- npm i -g json-server (only required if json-server is not globally installed)
- json-server --watch .\trips.json --port 3001

To run the frontend project use the following command inside the **frontend** folder:
- npm start
