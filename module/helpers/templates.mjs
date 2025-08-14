/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/2d6-dungeon/templates/actor/parts/actor-features.hbs',
    'systems/2d6-dungeon/templates/actor/parts/actor-items.hbs',
    'systems/2d6-dungeon/templates/actor/parts/actor-spells.hbs',
    'systems/2d6-dungeon/templates/actor/parts/actor-effects.hbs',
    // Item partials
    'systems/2d6-dungeon/templates/item/parts/item-effects.hbs',
  ]);
};
