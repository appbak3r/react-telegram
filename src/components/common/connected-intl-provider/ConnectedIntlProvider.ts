import { IntlProvider, addLocaleData } from "react-intl";
import { connect } from "react-redux";
import * as en from "react-intl/locale-data/en";

addLocaleData([...en]);

export const messages = {
  en: require("../../../locales/en.json")
};

export const TextComponent = (props: any) => {
  return props.children;
};

function mapStateToProps(): any {
  const locale = "en";

  return {
    locale,
    messages: { ...messages.en, ...messages[locale] }
  };
}

export const ConnectedIntlProvider = connect(mapStateToProps)(IntlProvider);
