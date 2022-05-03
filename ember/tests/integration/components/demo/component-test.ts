import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
module('Integration | Component | demo', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function (assert) {
    await render(hbs`{{demo}}`);
    assert.equal(this.element?.textContent?.trim(), '');
    await render(hbs`
      {{#demo}}
        template block text
      {{/demo}}
    `);
    assert.equal(this.element?.textContent?.trim(), 'template block text');
  });
});
