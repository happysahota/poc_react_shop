import {EventEmitter} from "events";
import dispatcher from "../Dispatcher";

class page extends EventEmitter {
    constructor() {
        super();
        this.pageData = {};
        this.pagesData = {}
        this.fetchPageDetails();
    }

    fetchPageDetails(data) {
        // this.pageData = pageType ? this.pagesData[pageType]:this.pagesData.productList;
        this.pageData = data ? data:window.__INITIAL_STATE__;
        this.emit("NewPageDataAvailable");      
    }

    getPageData(){        
        return this.pageData;
    }

    dispatchHandler(action) {
        switch(action.type) {
            case "PAGE_DATA": 
                this.fetchPageDetails(action.data);
                break;
        }
    }

}

const PageStore = new page();

dispatcher.register(PageStore.dispatchHandler.bind(PageStore));

export default PageStore;