export PATH=$PATH:/Users/administrator/gradle-2.11/bin
echo 'Gradle Path set..!'
echo mac_config | sudo -S chmod -R 777 ~/Desktop/Xxdev_10008/
cd ~/Desktop/Xxdev_10008/projects/mobile/ios
pwd
echo 'Started to excute gradle script'
gradle -q deployIPA