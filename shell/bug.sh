#!/usr/bin/env bash

echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances &&
echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events &&
echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches 
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
# watchman shutdown-server
