import React from 'react';
import { Moment } from 'moment';
import Picker from '../src/Picker';
import momentGenerateConfig from '../src/generate/moment';
import zhCN from '../src/locale/zh_CN';
import '../assets/index.less';

export default () => (
  <div>
    <div style={{ margin: '0 8px' }}>
      <h3>Uncontrolled</h3>
      <Picker<Moment>
        generateConfig={momentGenerateConfig}
        locale={zhCN}
        picker="week"
        allowClear
        style={{ width: 300 }}
      />
      <Picker<Moment>
        generateConfig={momentGenerateConfig}
        locale={zhCN}
        picker="week"
        allowClear
      />
      <button type="button">233</button>
    </div>
  </div>
);