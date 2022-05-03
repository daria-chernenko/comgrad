import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
module('Integration | Component | panel', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function (assert) {
    await render(hbs`{{panel}}`);
    assert.equal(this.element?.textContent?.trim(), '');
    await render(hbs`
      {{#panel}}
        template block text
      {{/panel}}
    `);
    assert.equal(this.element?.textContent?.trim(), 'template block text');
  });
});
