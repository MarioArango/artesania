import type { ThemeConfig } from 'antd'
import { theme } from 'antd';

const { compactAlgorithm } = theme

const themeConfig: ThemeConfig = {
  token: {
    fontSize: 16,
    margin: 8,
    fontFamily: 'Inter',
    colorPrimary: '#9A4444',
    // colorText: '#555843',
    borderRadius: 8
  },
  algorithm: compactAlgorithm,
  components: {
    Input: {
      controlHeight: 40,
      fontSize: 16
    },
    Button: {
      controlHeight: 40,
      fontSize: 16
    },
    InputNumber: {
      controlHeight: 40,
      fontSize: 16
    },
    Select: {
      controlHeight: 40,
      fontSize: 16
    },
    Segmented: {
      controlHeight: 40,
      fontSize: 16
    },
    DatePicker: {
      controlHeight: 40,
      fontSize: 16
    },
    Form: {
      controlHeight: 40,
      fontSize: 16
    }
  }
}

export default themeConfig