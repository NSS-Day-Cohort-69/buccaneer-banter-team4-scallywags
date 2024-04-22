#!/bin/bash

# Define the function that will kill both processes
terminate_processes() {
    echo "Stopping processes"
    kill ${PID1} ${PID2}
    exit 0
}

# Start your two long-running processes in the background
npm run dev &
PID1=$!
json-server ./api/database.json -p 8088 -w &
PID2=$!

# This will call terminate_processes function when you hit Ctrl+C or send a TERM signal
trap terminate_processes SIGINT SIGTERM

# Wait for both processes to finish
wait ${PID1} ${PID2}
