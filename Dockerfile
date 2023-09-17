FROM jelastic/maven:3.8.6-openjdk-20.ea-b24 as build
COPY . . 
RUN mvn clean package -DskipTests

FROM openjdk:20-jdk
COPY --from=build /target/*.jar dfwdictionary.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","dfwdictionary.jar"]
