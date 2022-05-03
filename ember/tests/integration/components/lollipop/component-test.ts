import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
module('Integration | Component | lollipop', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function (assert) {
    await render(hbs`{{lollipop}}`);
    assert.equal(this.element?.textContent?.trim(), '');
    await render(hbs`
      {{#lollipop}}
        template block text
      {{/lollipop}}
    `);
    assert.equal(this.element?.textContent?.trim(), 'template block text');
  });
});
