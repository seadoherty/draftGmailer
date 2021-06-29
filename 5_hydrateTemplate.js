// Fill template string with data object
function hydrateTemplate(template, data) {

    // stringifing the object to do a global replace
    let template_string = JSON.stringify(template);
  
    // token replacement
    template_string = template_string.replace(/{{[^{}]+}}/g, key => { return dataSafety(data[key.replace(/[{}]+/g, "")]) || ""; });
  
    return JSON.parse(template_string);
  };