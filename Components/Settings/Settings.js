import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Button, ListItem } from 'react-native-elements';

const Settings = () => {
  const settingOptions = ['Text Color', 'Theme', 'Button Size', 'Font Size'];
  const listSettings = settingOptions.map((c, i) => {
    return <ListItem style={styles.option} title={c} key={i} />;
  });
  return (
    <Card title="Settings">
      <Text style={{ marginBottom: 10 }}>
        Please feel free to experiment with the settings below. Heck, go poke'
        crazy!
      </Text>
      {listSettings}
      <Button
        icon={{ name: 'code' }}
        backgroundColor="#2a75bb"
        style={styles.button}
        title="VIEW NOW"
      />
    </Card>
  );
};

export default Settings;

const styles = StyleSheet.create({
  option: {
    marginBottom: 20
  },
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20
  }
});
