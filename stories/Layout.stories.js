import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Theme } from './styles/StyleComponents';
import { H2, H4, P } from '../components/typography';
import { Stack, Cluster, Outline } from '../components/layouts/';

storiesOf('Layouts', module).addDecorator(withKnobs)
    .add('Stack', () => (<Theme>
        <Stack large>
            <Stack small noExtraSpace>
                <H2>Stack</H2>
                <P>
                    <span>Stacks elements with equivalent space between them.</span>
                    <i>Observe the space between the child contents</i>
                </P>
            </Stack>
            <Outline all>
                <Stack>
                    <H2>Heading</H2>
                    <P>I go up, i need to go up. Can i go and play in the hay, we play in the Hay,. Can Jack and i play in the hay?</P>
                    <ul>
                        <li>The Mockingjay</li>
                        <li>Devergent</li>
                        <li>The Scorch Trail</li>
                    </ul>
                </Stack>
            </Outline>
            <Outline all>
                <Stack small noExtraSpace>
                    <H2>Heading</H2>
                    <P>I go up, i need to go up. Can i go and play in the hay, we play in the Hay,. Can Jack and i play in the hay?</P>
                </Stack>
            </Outline>
            <Outline all>
                <Stack noExtraSpace>
                    <H2>Heading</H2>
                    <P>I go up, i need to go up. Can i go and play in the hay, we play in the Hay,. Can Jack and i play in the hay?</P>
                </Stack>
            </Outline>
            <Outline all>
                <Stack medium noExtraSpace>
                    <H2>Heading</H2>
                    <P>I go up, i need to go up. Can i go and play in the hay, we play in the Hay,. Can Jack and i play in the hay?</P>
                </Stack>
            </Outline>
            <Outline all>
                <Stack large noExtraSpace>
                    <H2>Heading</H2>
                    <P>I go up, i need to go up. Can i go and play in the hay, we play in the Hay,. Can Jack and i play in the hay?</P>
                </Stack>
            </Outline>
        </Stack>
    </Theme>))
    .add('Outline', () => (<Theme>
        <Stack small noExtraSpace>
            <H2>Outline</H2>
            <P>Draws an outline for debugging layout/component structure.</P>
        </Stack>
    </Theme>))
    .add('Cluster', () => {
        return (
        <Theme>
            <Stack>
                <header>
                    <H2>Clusters</H2>
                    <P>This creates inner-spacing (padding) for the parent. 
                        Observe the space from all directions between the 
                        red border and the text content
                    </P>
                </header>

                <Outline all style={{display: 'flex'}}>
                    <div style={{flex: '1'}}>
                        <span>No Clusters</span>
                    </div>
                    <div style={{flex: '1'}}>
                        <span>No Clusters</span>
                    </div>
                    <div style={{flex: '1'}}>
                        <span>No Clusters</span>
                    </div>
                </Outline>
                <Outline all style={{display: 'flex'}}>
                    <Cluster.Small>
                        <span>Small Clusters</span>
                    </Cluster.Small>
                    <Cluster>
                        <span>Regular Clusters</span>
                    </Cluster>
                    <Cluster.Large>
                        <span>Large Clusters</span>
                    </Cluster.Large>
                </Outline>
                <Outline all style={{display: 'flex'}}>
                    <Cluster.Small vertical>
                        <span>Small Y Clusters</span>
                    </Cluster.Small>
                    <Cluster vertical>
                        <span>Regular Y Clusters</span>
                    </Cluster>
                    <Cluster.Large vertical>
                        <span>Large Y Clusters</span>
                    </Cluster.Large>
                </Outline>
                <Outline all style={{display: 'flex'}}>
                    <Cluster.Small horizontal>
                        <span>Small X Clusters</span>
                    </Cluster.Small>
                    <Cluster horizontal>
                        <span>Regular X Clusters</span>
                    </Cluster>
                    <Cluster.Large horizontal>
                        <span>Large X Clusters</span>
                    </Cluster.Large>
                </Outline>
            </Stack>
        </Theme>
        );
    })