import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, number } from "@storybook/addon-knobs"
import { Theme } from "./styles/StyleComponents"
import { H1, H2, H3, P } from "../components/typography"
import { Stack, Cluster, Outline } from "../components/layouts/"
import { Pager }  from "../components/layouts/Pager"
import { Button } from "../components/forms/buttons"

// eslint-disable-next-line
const ClusterOutline = ({ children }) => {
	return (
		<Cluster.Small>
			<Outline color="whitesmoke">
				{children}
			</Outline>
		</Cluster.Small>
	)
}

storiesOf("Layouts", module).addDecorator(withKnobs)
	.add("Stack", () => (<Theme>
		<Stack large>
			<Stack small noExtraSpace>
				<H1 bold>Stack</H1>
				<P>
					<span>Stacks elements with equivalent space between them.</span>
					<i>Observe the space between the child contents</i>
				</P>
			</Stack>

			{/* Removes the margin top from empty elements */}
			<Outline all>
				<Stack large noEmpty>
					<div></div>
					<div></div>
					<div></div>
				</Stack>
			</Outline>
			{/* Removes the margin top from empty elements */}
			
			<Outline all>
				<Stack>
					<H2 light>Mocking Jay</H2>
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
					<H2>John Wick</H2>
					<P>I go up, i need to go up. Can i go and play in the hay, we play in the Hay,. Can Jack and i play in the hay?</P>
				</Stack>
			</Outline>
			<Outline all>
				<Stack noExtraSpace>
					<H2>Angry Birds: Frienemies</H2>
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
	.add("Outline", () => (<Theme>
		<Stack small noExtraSpace>
			<H2>Outline</H2>
			<P>Draws an outline for debugging layout/component structure.</P>
		</Stack>
	</Theme>))
	.add("Cluster", () => {
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

					<Outline all style={{display: "flex"}}>
						<div style={{flex: "1"}}>
							<span>No Clusters</span>
						</div>
						<div style={{flex: "1"}}>
							<span>No Clusters</span>
						</div>
						<div style={{flex: "1"}}>
							<span>No Clusters</span>
						</div>
					</Outline>
					<Outline all style={{display: "flex"}}>
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
					<Outline all style={{display: "flex"}}>
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
					<Outline all style={{display: "flex"}}>
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
		)
	})
	.add("Pager", () => {
		const current = number("Current Page")
		return (
			<Theme>
				<Stack noExtraSpace style={{ width: "100%" }}>
					<H2>Pager</H2>
					<Outline color="indigo">
						<Pager /> {/* For Safety: Should throw error when no children */}
						<Pager current={current} morph={boolean("Should Morph")}>
							<ClusterOutline>
								<Stack noExtraSpace>
									<H3 light={true}>The Pager is really cool.</H3>
									<P>So, the page is more like a carousel; but for pages. It can switch between pages 
                                when a user wants it to. <br/>
                                Wait until you see how it really works</P>
									<P>Click Here to Switch to the Next Page</P>
									<Button>Switch to Page 2</Button>
								</Stack>
							</ClusterOutline>
							<ClusterOutline>
								<Stack noExtraSpace>
									<H3>This is the Second Page</H3>
									<P>So, what do you think about it?</P>
									<P>Great or what?</P>
									<P>Click Here to Switch to the Previous Page</P>
									<P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi perferendis placeat optio accusamus tempora debitis facilis? Officiis obcaecati cum natus in aspernatur, est, adipisci labore amet necessitatibus commodi, reprehenderit aperiam et cumque a nesciunt harum delectus. Recusandae, eveniet iste provident delectus consequuntur autem similique repellendus. Asperiores labore facere quis sint. Iste, maiores! Deserunt dignissimos veritatis minima laboriosam, quaerat cum, ad iure eius itaque possimus error suscipit corrupti, soluta debitis ab! Temporibus cumque blanditiis obcaecati sint aliquam adipisci ipsa sunt neque dolorum quas perferendis reprehenderit eius maxime modi debitis ad, eligendi!</P>
									<Button>Back</Button>
								</Stack>
							</ClusterOutline>
						</Pager>
					</Outline>
				</Stack>
			</Theme>
		)
	})