export const validWorkflow={id:"wf-1",name:"Index knowledge",state:"pending",requiredCapabilities:["ingest"],dependencies:[]} as const;
export const invalidWorkflow={id:"",name:"Bad",state:"teleporting",requiredCapabilities:[],dependencies:[]} as const;
export const validAgent={id:"agent-1",name:"Indexer",capabilities:["ingest"],toolIds:["tool-1"]} as const;
export const invalidAgent={id:"agent-2",name:"Bad",capabilities:[],toolIds:[]} as const;
