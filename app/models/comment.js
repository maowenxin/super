import DS from 'ember-data';

export default DS.Model.extend({
    rental: DS.belongsTo('rental'),
    title:DS.attr()
});
