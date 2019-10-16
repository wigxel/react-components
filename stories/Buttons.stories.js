import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Button,
  IconButton,
  CircleButton
} from '../components/forms/buttons';
import { Theme } from './styles/StyleComponents';
import { Tab } from '../components/layouts';

storiesOf('Button', module)
  .add('Overview', () => (
    <Theme>
      <Tab>
        <Button primary>Do Something</Button>
        <Button>Hello Button</Button>
        <Button danger>Stop Now</Button>
        <Button large primary>
          Primary
        </Button>
        <Button outline>Outline</Button>
        <Button danger outline large>
          Outline Large
        </Button>
      </Tab>
    </Theme>
  ))
  .add('Outlined', () => (
    <Theme>
      <Tab>
        <Button danger outline>
          Danger
        </Button>
        <Button warning outline>
          Warning
        </Button>
        <Button primary outline large>
          Primary
        </Button>
      </Tab>
    </Theme>
  ))
  .add('with icons', () => (
    <Theme>
      <Tab>
        <IconButton icon="dashboard" color="#fff">
          Add Vendor
        </IconButton>
        <IconButton icon="home" color="#fff" primary large>
          Add Profile Info
        </IconButton>
      </Tab>
    </Theme>
  ))
  .add('Button Circle', () => (
    <Theme>
      <Tab>
        <CircleButton icon="home" onClick={() => alert('clicking button')} />
        <CircleButton icon="add" onClick={() => alert('clicking button')} />
      </Tab>
    </Theme>
  ));
