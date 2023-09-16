FROM eclipse-temurin:20-jdk-alpine
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/dfwdictionary-main.jar"]
EXPOSE 8080
