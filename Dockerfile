FROM eclipse-temurin:20-jdk-alpine
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/dfwdictionary.jar"]
EXPOSE 8080
