/*
 * Demo  Messages
 *
 * This contains all the text for the Demo component.
 */

import { defineMessages } from "react-intl";

export const scope = "Demo";

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "title",
  }
});
