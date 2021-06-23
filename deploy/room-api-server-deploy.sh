REPOSITORY=/opt/room
cd $REPOSITORY

SERVER_NAME=room-api-server

JAR_NAME=$(ls $REPOSITORY/$SERVER_NAME/build/libs/ | grep '.jar' | tail -n 1)
JAR_PATH=$REPOSITORY/$SERVER_NAME/build/libs/$JAR_NAME

CURRENT_PID=$(pgrep -f $SERVER_NAME)

if [ -z $CURRENT_PID ]
then
  echo "> 종료할것 없음."
else
  echo "> kill -9 $CURRENT_PID"
  kill -15 $CURRENT_PID
  sleep 5
fi

echo "> $SERVER_NAME $JAR_PATH 배포"
nohup java -jar $JAR_PATH > /dev/null 2> /dev/null < /dev/null &
