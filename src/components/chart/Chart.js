import React from 'react';

import { VictoryChart, VictoryTheme, VictoryBar, VictoryAxis } from 'victory';

const data = [
  { Model: 'rio', make: 'kia' },
  { Model: 'tacoma', make: 'toyota' },
  { Model: '4runner', make: 'toyota' },
  { Model: 'civic', make: 'honda' },
  { Model: 'impreza', make: 'subaru' },
];

export default function BarChart() {
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5]}
        tickFormat={['rio', 'tacoma', '4runner', 'civic', 'impreza']}
      />
      <VictoryAxis dependentAxis />
      <VictoryBar data={data} x="Model" y="make" />
    </VictoryChart>
  );
}

