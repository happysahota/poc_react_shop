import React from "react";

import PageStore from "../../../dataStore/PageStore";

import ShopGuarantee from "../extras/shopGuarantee";
import MarketingTouts from "../extras/marketingTouts";
import MainStage from "../extras/mainStage";
import LongFormTextSmall from "../extras/longFormTextSmall";
import ExclusivesCarousel from "../extras/exclusivesCarousel";
import EmailSubscriptionTout from "../extras/emailSubscriptionTout";

export default class HomePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pageData: PageStore.getPageData()
		};
	}

	componentWillMount() {
		PageStore.on("NewPageDataAvailable", this.updatePageStore.bind(this) );
	}

	componentWillUnmount() {
		PageStore.removeListener("NewPageDataAvailable", this.updatePageStore.bind(this));
	}

	updatePageStore() {
		this.setState({
			pageData: PageStore.getPageData()
		})
	}

	render() {

		var dynamicPageContent = this.state.pageData.dynamicPage.content;
		var dynamicPageContentSections = dynamicPageContent.sections;
		var dynaHtml = dynamicPageContentSections.map((section, key) => {
			var type = section.section_type;
			var ret;
			switch (type) {
				case "mainstage":
					ret = <MainStage key={key} data={section} />;
					break;
				case "shopGuarantee":
					ret = <ShopGuarantee key={key} data={section} />;
					break;
				case "longFormTextSmall":
					ret = <LongFormTextSmall key={key} data={section} />
					break;
				case "marketingTout2UpTall":
					ret = <MarketingTouts key={key} data={section} />
					break;
				case "exclusivesCarousel":
					ret = <ExclusivesCarousel key={key} data={section} />
					break;
				case "emailSubscription":
					ret = <EmailSubscriptionTout key={key} data={section} />
					break;
				case "recommendedProducts":
					ret = <LongFormTextSmall key={key} data={section} />
					break;
				default:
					ret = null;
					break;
			}

			return ret;
		});

		return (
			<main className="homepage" data-test="main" data-reactid="113">
				<div className="homepage__content" data-test="page-content" data-reactid="114">
					<nav className="breadcrumbs" aria-label="Breadcrumb Navigation" data-reactid="115">
						<ol className="breadcrumbs__list" data-test="breadcrumbs-list" data-reactid="116">
							<li className="breadcrumbs__crumb" data-reactid="117"><a data-test="breadcrumb-link" href="https://shop.lego.com/en-US/" data-reactid="118"><span className="markup" data-reactid="119">Home</span></a></li>
						</ol>
					</nav>
					<div className="dynamic-sections" data-test="dynamic-sections" data-reactid="126">
						<div className="dynamic-sections__container" data-test="dynamic-sections-container" data-reactid="127">

							{dynaHtml}

						</div>
					</div>
				</div>
			</main>
		);
	}
}