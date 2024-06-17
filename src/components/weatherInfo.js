import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const WeatherInfo = ({ weatherData }) => {
  const renderWeatherIcon = () => {
    switch (weatherData.weather[0].main) {
      case "Clear":
        return (
          <Image
            source={{ uri: "https://openweathermap.org/img/wn/01d.png" }}
            style={styles.weatherIcon}
          />
        );
      case "Clouds":
        return (
          <Image
            source={{ uri: "https://openweathermap.org/img/wn/02d.png" }}
            style={styles.weatherIcon}
          />
        );
      case "Snow":
        return (
          <Image
            source={{ uri: "https://openweathermap.org/img/wn/13d.png" }}
            style={styles.weatherIcon}
          />
        );
      case "Rain":
        return (
          <Image
            source={{ uri: "https://openweathermap.org/img/wn/10d.png" }}
            style={styles.weatherIcon}
          />
        );
      case "Drizzle":
        return (
          <Image
            source={{ uri: "https://openweathermap.org/img/wn/09d.png" }}
            style={styles.weatherIcon}
          />
        );
      case "Thunderstorm":
        return (
          <Image
            source={{ uri: "https://openweathermap.org/img/wn/11d.png" }}
            style={styles.weatherIcon}
          />
        );
      default:
        return (
          <Image
            source={{ uri: "https://openweathermap.org/img/wn/50d.png" }}
            style={styles.weatherIcon}
          />
        );
    }
  };

  return (
    <View style={(styles.marginTop20, styles.weatherCard)}>
      <Text style={styles.text}>The weather of {weatherData.name}</Text>
      <Text style={[styles.temperature, styles.marginTop20]}>
        {weatherData.main.temp}°C
      </Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        {renderWeatherIcon()}
        <Text style={[styles.text, styles.bold]}>
          {weatherData.weather[0].main}
        </Text>
      </View>
      <Text style={styles.text}>{weatherData.weather[0].description}</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Visibility :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>
          {weatherData.visibility} km
        </Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Wind Speed :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>
          {weatherData.wind.speed} m/s
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
  },
  bold: {
    fontWeight: "700",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  temperature: {
    fontWeight: "700",
    fontSize: 80,
    textAlign: "center",
    color: "#fff",
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  weatherCard: {
    padding: 20,
    margin: 20,
    marginVertical: 15,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});

export default WeatherInfo;