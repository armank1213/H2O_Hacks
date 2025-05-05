import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const tips = [
  {
    title: "Use Water Outside Peak Times",
    description:
      "Running appliances or watering during off-peak hours (early morning or late night) can reduce costs due to time-of-use utility pricing.",
  },
  {
    title: "Fix Leaks Promptly",
    description:
      "A single leaky faucet can waste over 3,000 gallons of water a year. Fixing leaks early saves both water and money.",
  },
  {
    title: "Install Low-Flow Fixtures",
    description:
      "Low-flow showerheads and faucet aerators reduce water use by up to 50% without compromising performance.",
  },
  {
    title: "Water Early or Late",
    description:
      "Water your garden before 10 a.m. or after 6 p.m. to reduce evaporation and increase soil absorption.",
  },
  {
    title: "Use Full Loads Only",
    description:
      "Run washing machines and dishwashers only when they’re full to maximize efficiency and reduce water use.",
  },
  {
    title: "Collect Rainwater",
    description:
      "Install a rain barrel to collect water from gutters. Use it to water your plants and garden instead of using tap water.",
  },
  {
    title: "Sweep Driveways Instead of Hosing",
    description:
      "Use a broom instead of a hose to clean patios and driveways. This can save hundreds of gallons per use.",
  },
  {
    title: "Use Drought-Resistant Plants",
    description:
      "Choose native and drought-tolerant plants that require less watering and are better adapted to your climate.",
  },
  {
    title: "Turn Off the Tap",
    description:
      "Don’t leave the tap running while brushing your teeth or scrubbing dishes. Turning it off can save gallons every day.",
  },
  {
    title: "Insulate Hot Water Pipes",
    description:
      "Insulating pipes reduces the time it takes for hot water to reach your faucet, saving both water and energy.",
  },
  {
    title: "Cover Your Pool",
    description:
      "If you have a pool, always use a pool cover when not in use. This reduces evaporation by up to 95% and keeps it clean, reducing the need for refills.",
  },
  {
    title: "Choose Efficient Appliances",
    description:
      "When upgrading appliances, look for ENERGY STAR certified models. These use significantly less water and energy, saving you money in the long run.",
  },
  {
    title: "Use a Broom, Not a Hose",
    description:
      "Clean driveways and sidewalks with a broom instead of hosing them down. A hose can use over 100 gallons in just 10 minutes.",
  },
  {
    title: "Capture Cold Shower Water",
    description:
      "While waiting for your shower to warm up, collect cold water in a bucket. Use it later for watering plants or flushing toilets.",
  },
  {
    title: "Teach Water Awareness",
    description:
      "Educate children and family members about turning off the tap when brushing teeth, washing hands, or scrubbing dishes.",
  },
  {
    title: "Use Mulch in Your Garden",
    description:
      "Mulch helps soil retain moisture, reduces evaporation, and keeps roots cool. It also helps prevent weed growth.",
  },
  {
    title: "Optimize Sprinkler Settings",
    description:
      "Adjust sprinkler heads to avoid watering sidewalks or streets. Water in short bursts to allow soil to absorb more and reduce runoff.",
  },
  {
    title: "Use Drip Irrigation",
    description:
      "Drip systems deliver water directly to the base of plants, minimizing evaporation and runoff compared to traditional sprinklers.",
  },
  {
    title: "Check Utility Rebates",
    description:
      "Many cities offer rebates for water-efficient appliances, rain barrels, and turf removal. Take advantage of these programs to save money.",
  },
  {
    title: "Install Dual-Flush Toilets",
    description:
      "Dual-flush toilets offer two flush options: one for liquid waste and another for solids. This reduces overall water usage significantly.",
  },
];

const TipsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Water-Saving Tips</Text>

      {tips.map((tip, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{tip.title}</Text>
          <Text style={styles.description}>{tip.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default TipsScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 60,
    paddingHorizontal: 24,
    backgroundColor: '#e0f7fa',
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0077be',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
    color: '#0077be',
  },
  description: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
});