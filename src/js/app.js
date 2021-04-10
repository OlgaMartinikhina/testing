// eslint-disable-next-line import/extensions
import Widget from './widget.js';
// eslint-disable-next-line import/extensions
import Logic from './logic.js';

const widget = new Widget();
const logic = new Logic(widget);
logic.init();
