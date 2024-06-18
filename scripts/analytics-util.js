// eslint-disable-next-line import/no-cycle

const event_tracking = {"event": {
    "event": "custom.link",
    "eventInfo": {
        "id": "",
        "category": {
            "primaryCategory": "",
            "subCategory": "",
            "linkName": "",
            "linkURL": "",
        },
        "block": {
            "blockInfo": {
                "blockName": "",
                "blockDetails": "",
            },
        },
        "section": {
            "sectionInfo": {
                "sectionName" : "",
                "sectionID" : "",
            },
        },
    }
}}

export function pushCustomLinkAnalyticData(prop) {  
    const [analyticsLabel, primaryCategory, subCategory, blockName, sectionId, linkURL] = prop;
    
    const randomNum = 100000 + Math.random() * 900000;
    event_tracking.event.eventInfo.id = Math.floor(randomNum).toString();

    event_tracking.event.eventInfo.category.primaryCategory = primaryCategory;
    event_tracking.event.eventInfo.category.subCategory = subCategory;
    event_tracking.event.eventInfo.category.linkName = analyticsLabel;
    event_tracking.event.eventInfo.category.linkURL = linkURL;

    event_tracking.event.eventInfo.block.blockInfo.blockName = blockName;
    event_tracking.event.eventInfo.block.blockInfo.blockDetails = analyticsLabel;

    event_tracking.event.eventInfo.section.sectionInfo.sectionID = sectionId;

    window.adobeDataLayer.push(event_tracking);
}