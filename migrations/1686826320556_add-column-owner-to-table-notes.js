/* eslint-disable camelcase */
/* eslint linebreak-style: ["error", "unix"] */

exports.up = (pgm) => {
  pgm.addColumn('notes', {
    owner: {
      type: 'VARCHAR(50)',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumn('notes', 'owner');
};
