import Application from 'gradient-company/app';
import config from 'gradient-company/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
setApplication(Application.create(config.APP));
setup(QUnit.assert);
start();
