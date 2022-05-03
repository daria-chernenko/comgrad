import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
module('Integration | Component | wrapper', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function (assert) {
    await render(hbs`{{wrapper}}`);
    assert.equal(this.element?.textContent?.trim(), '');
    await render(hbs`
      {{#wrapper}}
        template block text
      {{/wrapper}}
    `);
    assert.equal(this.element?.textContent?.trim(), 'template block text');
  });
});
