import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
module('Integration | Component | character', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function (assert) {
    await render(hbs`{{character}}`);
    assert.equal(this.element?.textContent?.trim(), '');
    await render(hbs`
      {{#character}}
        template block text
      {{/character}}
    `);
    assert.equal(this.element?.textContent?.trim(), 'template block text');
  });
});
