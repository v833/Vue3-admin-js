import {
  createI18n
} from 'vue-i18n'
import en from './en'
import ch from './ch'
const i18n = createI18n({
  locale: 'ch',
  messages: {
    en,
    ch
  }
});

export default i18n