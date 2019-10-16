import React from 'react'
import styled from 'styled-components'

const StyleCoverImage = styled.img`
	width: 100%;
	height: 25vh;
	min-height: 250px;
	object-fit: cover;
	border-radius: 12px;
`

export const CoverImage = () => <StyleCoverImage className="w-4/5" src="/images/vendor_banner.png"/>
