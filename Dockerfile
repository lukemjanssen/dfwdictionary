# write dockerfile for building image 
FROM openjdk:20
VOLUME /tmp
ARG JAR_FILE=dfwdictionary-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","app.jar"]
EXPOSE 8080
