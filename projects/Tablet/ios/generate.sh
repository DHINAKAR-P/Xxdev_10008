#Generating IPA
executeXcodeIpaBuild(){

cd  Xxdev_10008

/bin/sh -c "sleep 10 ; echo IOS_Platform_Removed"

/bin/sh -c "sleep 10 ; echo installing NPM "

npm install

/bin/sh -c "sleep 10 ; echo Building Ionic"

cordova prepare

/bin/sh -c "sleep 10 ; echo Xxdev_10008_Access_Granted"

security -v unlock-keychain -p "g5eBCuKV" "login.keychain"

/bin/sh -c "sleep 10 ; echo IPA BUILD and Archive Started"

 ionic cordova build ios --no-interactive --buildConfig=build.json --device --release

/bin/sh -c "sleep 10 ; echo IPA Generated"

cd ~/Desktop/Xxdev_10008/projects/mobile/ios/Xxdev_10008/platforms/ios/build/device

curl -H "X-InstallrAppToken:ODVP3Rjlz3GQe33wMbPNWL1DAuFJ6pi4"  https://www.installrapp.com/apps.json -F qqfile=@Xxdev_10008.ipa --verbose >IpaUploadSucess.json

cd ~/Desktop/Xxdev_10008/

#cp -R ~/AutoProvision.jar ~/Desktop/Xxdev_10008/

#java -jar AutoProvision.jar

exit 0
}

executeXcodeIpaBuildTablet(){

#this cd refer inside the project dir in mac mini desktop

cd  Xxdev_10008/projects/Tablet/ios/Xxdev_10008/

/bin/sh -c "sleep 10 ; echo IOS_Platform_Removed"

/bin/sh -c "sleep 10 ; echo installing NPM "

npm install --loglevel info

/bin/sh -c "sleep 10 ; echo Building Ionic"

cordova prepare

/bin/sh -c "sleep 10 ; echo Xxdev_10008_Access_Granted"

security -v unlock-keychain -p "g5eBCuKV" "login.keychain"

/bin/sh -c "sleep 10 ; echo IPA BUILD and Archive Started"

cordova build ios --buildConfig=build.json --device --release

/bin/sh -c "sleep 10 ; echo IPA Generated"

cd ~/Desktop/Xxdev_10008/projects/Tablet/ios/Xxdev_10008/platforms/ios/build/device

curl -H "X-InstallrAppToken:ODVP3Rjlz3GQe33wMbPNWL1DAuFJ6pi4"  https://www.installrapp.com/apps.json -F qqfile=@Xxdev_10008.ipa --verbose >IpaUploadSucess.json

cd ~/Desktop/Xxdev_10008/

#cp -R ~/AutoProvision.jar ~/Desktop/Xxdev_10008/

#java -jar AutoProvision.jar

exit 0
}
# call arguments verbatim:
$@