Search.setIndex({docnames:["index","modules","tatk","tatk.dialog_agent","tatk.dst","tatk.dst.mdbt","tatk.dst.mdbt.multiwoz","tatk.dst.rule","tatk.e2e","tatk.evaluator","tatk.nlg","tatk.nlg.template_nlg","tatk.nlg.template_nlg.camrest","tatk.nlg.template_nlg.multiwoz","tatk.nlu","tatk.nlu.bert","tatk.nlu.bert.camrest","tatk.nlu.bert.multiwoz","tatk.nlu.svm","tatk.nlu.svm.camrest","tatk.nlu.svm.multiwoz","tatk.policy","tatk.policy.vector","tatk.task","tatk.task.camrest","tatk.task.multiwoz","tatk.util","tatk.util.camrest","tatk.util.multiwoz"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,sphinx:56},filenames:["index.rst","modules.rst","tatk.rst","tatk.dialog_agent.rst","tatk.dst.rst","tatk.dst.mdbt.rst","tatk.dst.mdbt.multiwoz.rst","tatk.dst.rule.rst","tatk.e2e.rst","tatk.evaluator.rst","tatk.nlg.rst","tatk.nlg.template_nlg.rst","tatk.nlg.template_nlg.camrest.rst","tatk.nlg.template_nlg.multiwoz.rst","tatk.nlu.rst","tatk.nlu.bert.rst","tatk.nlu.bert.camrest.rst","tatk.nlu.bert.multiwoz.rst","tatk.nlu.svm.rst","tatk.nlu.svm.camrest.rst","tatk.nlu.svm.multiwoz.rst","tatk.policy.rst","tatk.policy.vector.rst","tatk.task.rst","tatk.task.camrest.rst","tatk.task.multiwoz.rst","tatk.util.rst","tatk.util.camrest.rst","tatk.util.multiwoz.rst"],objects:{"":{tatk:[2,0,0,"-"]},"tatk.dialog_agent":{agent:[3,0,0,"-"],session:[3,0,0,"-"]},"tatk.dialog_agent.agent":{Agent:[3,1,1,""],PipelineAgent:[3,1,1,""]},"tatk.dialog_agent.agent.Agent":{init_session:[3,2,1,""],response:[3,2,1,""]},"tatk.dialog_agent.agent.PipelineAgent":{__init__:[3,2,1,""],init_session:[3,2,1,""],response:[3,2,1,""]},"tatk.dialog_agent.session":{BiSession:[3,1,1,""],Session:[3,1,1,""]},"tatk.dialog_agent.session.BiSession":{__init__:[3,2,1,""],init_session:[3,2,1,""],next_agent:[3,2,1,""],next_response:[3,2,1,""],next_turn:[3,2,1,""],train_policy:[3,2,1,""]},"tatk.dialog_agent.session.Session":{init_session:[3,2,1,""],next_agent:[3,2,1,""],next_response:[3,2,1,""]},"tatk.dst":{state_tracker:[4,0,0,"-"]},"tatk.dst.mdbt":{evaluate:[5,0,0,"-"],mdbt:[5,0,0,"-"],mdbt_util:[5,0,0,"-"]},"tatk.dst.mdbt.evaluate":{ResultStat:[5,1,1,""],Word_DST:[5,1,1,""],convert2acc:[5,3,1,""],evaluate:[5,3,1,""],load_data:[5,3,1,""],match_goal:[5,3,1,""],run_test:[5,3,1,""]},"tatk.dst.mdbt.evaluate.ResultStat":{__init__:[5,2,1,""],add:[5,2,1,""],all_acc:[5,2,1,""],domain_acc:[5,2,1,""],slot_acc:[5,2,1,""]},"tatk.dst.mdbt.evaluate.Word_DST":{__init__:[5,2,1,""],reset:[5,2,1,""],update:[5,2,1,""]},"tatk.dst.mdbt.mdbt":{MDBT:[5,1,1,""]},"tatk.dst.mdbt.mdbt.MDBT":{__init__:[5,2,1,""],detect_requestable_slots:[5,2,1,""],init_session:[5,2,1,""],normalize_history:[5,2,1,""],restore:[5,2,1,""],update:[5,2,1,""]},"tatk.dst.mdbt.mdbt_util":{GRU:[5,1,1,""],define_CNN_model:[5,3,1,""],evaluate_model:[5,3,1,""],generate_batch:[5,3,1,""],get_available_devs:[5,3,1,""],get_metrics:[5,3,1,""],load_ontology:[5,3,1,""],load_word_vectors:[5,3,1,""],load_woz_data:[5,3,1,""],lstm_model:[5,3,1,""],model_definition:[5,3,1,""],normalise_word_vectors:[5,3,1,""],process_booking:[5,3,1,""],process_history:[5,3,1,""],process_text:[5,3,1,""],process_turn:[5,3,1,""],track_dialogue:[5,3,1,""],xavier_vector:[5,3,1,""]},"tatk.dst.mdbt.mdbt_util.GRU":{__init__:[5,2,1,""],output_size:[5,2,1,""],state_size:[5,2,1,""]},"tatk.dst.mdbt.multiwoz":{mdbt:[6,0,0,"-"]},"tatk.dst.mdbt.multiwoz.mdbt":{MultiWozMDBT:[6,1,1,""],test_model:[6,3,1,""],test_update:[6,3,1,""]},"tatk.dst.mdbt.multiwoz.mdbt.MultiWozMDBT":{__init__:[6,2,1,""],test:[6,2,1,""],train:[6,2,1,""]},"tatk.dst.rule":{dst_util:[7,0,0,"-"],rule_dst:[7,0,0,"-"]},"tatk.dst.rule.dst_util":{init_state:[7,3,1,""],minDistance:[7,3,1,""],normalize_value:[7,3,1,""],special_match:[7,3,1,""],str_similar:[7,3,1,""]},"tatk.dst.rule.rule_dst":{RuleDST:[7,1,1,""]},"tatk.dst.rule.rule_dst.RuleDST":{__init__:[7,2,1,""],init_session:[7,2,1,""],update:[7,2,1,""]},"tatk.dst.state_tracker":{Tracker:[4,1,1,""]},"tatk.dst.state_tracker.Tracker":{init_session:[4,2,1,""],update:[4,2,1,""]},"tatk.evaluator":{evaluator:[9,0,0,"-"],multiwoz_eval:[9,0,0,"-"]},"tatk.evaluator.evaluator":{Evaluator:[9,1,1,""]},"tatk.evaluator.evaluator.Evaluator":{__init__:[9,2,1,""],add_goal:[9,2,1,""],add_sys_da:[9,2,1,""],add_usr_da:[9,2,1,""],book_rate:[9,2,1,""],domain_success:[9,2,1,""],inform_F1:[9,2,1,""],task_success:[9,2,1,""]},"tatk.evaluator.multiwoz_eval":{MultiWozEvaluator:[9,1,1,""]},"tatk.evaluator.multiwoz_eval.MultiWozEvaluator":{__init__:[9,2,1,""],add_goal:[9,2,1,""],add_sys_da:[9,2,1,""],add_usr_da:[9,2,1,""],book_rate:[9,2,1,""],domain_success:[9,2,1,""],inform_F1:[9,2,1,""],task_success:[9,2,1,""]},"tatk.nlg":{nlg:[10,0,0,"-"],template_nlg:[11,0,0,"-"]},"tatk.nlg.nlg":{NLG:[10,1,1,""]},"tatk.nlg.nlg.NLG":{generate:[10,2,1,""]},"tatk.nlg.template_nlg.camrest":{nlg:[12,0,0,"-"]},"tatk.nlg.template_nlg.camrest.nlg":{TemplateNLG:[12,1,1,""],test:[12,3,1,""]},"tatk.nlg.template_nlg.camrest.nlg.TemplateNLG":{__init__:[12,2,1,""],generate:[12,2,1,""],read_json:[12,2,1,""]},"tatk.nlg.template_nlg.multiwoz":{nlg:[13,0,0,"-"]},"tatk.nlg.template_nlg.multiwoz.nlg":{TemplateNLG:[13,1,1,""],example:[13,3,1,""],read_json:[13,3,1,""]},"tatk.nlg.template_nlg.multiwoz.nlg.TemplateNLG":{__init__:[13,2,1,""],generate:[13,2,1,""]},"tatk.nlu":{nlu:[14,0,0,"-"]},"tatk.nlu.bert.camrest":{preprocess:[16,0,0,"-"]},"tatk.nlu.bert.camrest.preprocess":{das2tags:[16,3,1,""],get_idx:[16,3,1,""],phrase_idx_utt:[16,3,1,""],phrase_in_utt:[16,3,1,""],read_zipped_json:[16,3,1,""]},"tatk.nlu.bert.multiwoz":{preprocess:[17,0,0,"-"]},"tatk.nlu.bert.multiwoz.preprocess":{read_zipped_json:[17,3,1,""]},"tatk.nlu.nlu":{NLU:[14,1,1,""]},"tatk.nlu.nlu.NLU":{predict:[14,2,1,""]},"tatk.nlu.svm":{Classifier:[18,0,0,"-"],Features:[18,0,0,"-"],Tuples:[18,0,0,"-"],dataset_walker:[18,0,0,"-"],sutils:[18,0,0,"-"],train:[18,0,0,"-"]},"tatk.nlu.svm.Classifier":{SGD:[18,1,1,""],SVM:[18,1,1,""],classifier:[18,1,1,""],toSparse:[18,3,1,""],trainSVMwrapper:[18,3,1,""]},"tatk.nlu.svm.Classifier.SGD":{__init__:[18,2,1,""],load:[18,2,1,""],params:[18,2,1,""],predict:[18,2,1,""],train:[18,2,1,""]},"tatk.nlu.svm.Classifier.SVM":{__init__:[18,2,1,""],load:[18,2,1,""],params:[18,2,1,""],pickC:[18,2,1,""],predict:[18,2,1,""],train:[18,2,1,""]},"tatk.nlu.svm.Classifier.classifier":{"export":[18,2,1,""],__init__:[18,2,1,""],cacheFeature:[18,2,1,""],createDictionary:[18,2,1,""],decode:[18,2,1,""],decodeToFile:[18,2,1,""],decode_sent:[18,2,1,""],extractFeatures2:[18,2,1,""],extractFeatures:[18,2,1,""],load:[18,2,1,""],save:[18,2,1,""],train:[18,2,1,""]},"tatk.nlu.svm.Features":{cnNgram:[18,1,1,""],cn_ngram_merge:[18,3,1,""],cn_ngram_prune:[18,3,1,""],cn_ngram_replaced:[18,3,1,""],cnet:[18,1,1,""],get_cnngrams:[18,3,1,""],get_ngrams:[18,3,1,""],lastSys:[18,1,1,""],nbest:[18,1,1,""],nbestLengths:[18,1,1,""],nbestScores:[18,1,1,""],valueIdentifying:[18,1,1,""]},"tatk.nlu.svm.Features.cnNgram":{__init__:[18,2,1,""],logscore:[18,2,1,""],score:[18,2,1,""],string_repn:[18,2,1,""],word_list:[18,2,1,""]},"tatk.nlu.svm.Features.cnet":{__init__:[18,2,1,""],calculate:[18,2,1,""],tuple_calculate:[18,2,1,""]},"tatk.nlu.svm.Features.lastSys":{__init__:[18,2,1,""],calculate:[18,2,1,""],tuple_calculate:[18,2,1,""]},"tatk.nlu.svm.Features.nbest":{__init__:[18,2,1,""],calculate:[18,2,1,""],calculate_sent:[18,2,1,""],tuple_calculate:[18,2,1,""]},"tatk.nlu.svm.Features.nbestLengths":{__init__:[18,2,1,""],calculate:[18,2,1,""],tuple_calculate:[18,2,1,""]},"tatk.nlu.svm.Features.nbestScores":{__init__:[18,2,1,""],calculate:[18,2,1,""],tuple_calculate:[18,2,1,""]},"tatk.nlu.svm.Features.valueIdentifying":{__init__:[18,2,1,""],calculate:[18,2,1,""],tuple_calculate:[18,2,1,""]},"tatk.nlu.svm.Tuples":{actual_value:[18,3,1,""],genericValue:[18,1,1,""],generic_to_specific:[18,3,1,""],is_generic:[18,3,1,""],makes_valid_act:[18,3,1,""],tuple_to_act:[18,3,1,""],tuples:[18,1,1,""]},"tatk.nlu.svm.Tuples.genericValue":{__init__:[18,2,1,""]},"tatk.nlu.svm.Tuples.tuples":{__init__:[18,2,1,""],activeTuples:[18,2,1,""],activeTuples_sent:[18,2,1,""],distributionToNbest:[18,2,1,""],uactsToTuples:[18,2,1,""]},"tatk.nlu.svm.camrest":{preprocess:[19,0,0,"-"]},"tatk.nlu.svm.camrest.preprocess":{read_zipped_json:[19,3,1,""]},"tatk.nlu.svm.dataset_walker":{Call:[18,1,1,""],dataset_walker:[18,1,1,""]},"tatk.nlu.svm.dataset_walker.Call":{__init__:[18,2,1,""]},"tatk.nlu.svm.dataset_walker.dataset_walker":{__init__:[18,2,1,""]},"tatk.nlu.svm.multiwoz":{preprocess:[20,0,0,"-"]},"tatk.nlu.svm.multiwoz.preprocess":{read_zipped_json:[20,3,1,""]},"tatk.nlu.svm.sutils":{import_class:[18,3,1,""],powerset:[18,3,1,""],svm_to_libsvm:[18,3,1,""]},"tatk.nlu.svm.train":{train:[18,3,1,""],usage:[18,3,1,""]},"tatk.policy":{policy:[21,0,0,"-"],vec:[21,0,0,"-"]},"tatk.policy.policy":{Policy:[21,1,1,""]},"tatk.policy.policy.Policy":{init_session:[21,2,1,""],predict:[21,2,1,""]},"tatk.policy.vec":{Vector:[21,1,1,""]},"tatk.policy.vec.Vector":{__init__:[21,2,1,""],action_devectorize:[21,2,1,""],generate_dict:[21,2,1,""],state_vectorize:[21,2,1,""]},"tatk.policy.vector":{vector_camrest:[22,0,0,"-"],vector_multiwoz:[22,0,0,"-"]},"tatk.policy.vector.vector_camrest":{CamrestVector:[22,1,1,""]},"tatk.policy.vector.vector_camrest.CamrestVector":{__init__:[22,2,1,""],action_devectorize:[22,2,1,""],action_vectorize:[22,2,1,""],generate_dict:[22,2,1,""],one_hot_vector:[22,2,1,""],pointer:[22,2,1,""],state_vectorize:[22,2,1,""]},"tatk.policy.vector.vector_multiwoz":{MultiWozVector:[22,1,1,""]},"tatk.policy.vector.vector_multiwoz.MultiWozVector":{__init__:[22,2,1,""],action_devectorize:[22,2,1,""],action_vectorize:[22,2,1,""],generate_dict:[22,2,1,""],one_hot_vector:[22,2,1,""],pointer:[22,2,1,""],state_vectorize:[22,2,1,""]},"tatk.task.camrest":{goal_generator:[24,0,0,"-"]},"tatk.task.camrest.goal_generator":{GoalGenerator:[24,1,1,""],nomial_sample:[24,3,1,""]},"tatk.task.camrest.goal_generator.GoalGenerator":{__init__:[24,2,1,""],build_message:[24,2,1,""],get_user_goal:[24,2,1,""]},"tatk.task.multiwoz":{goal_generator:[25,0,0,"-"]},"tatk.task.multiwoz.goal_generator":{GoalGenerator:[25,1,1,""],do_boldify:[25,3,1,""],nomial_sample:[25,3,1,""],null_boldify:[25,3,1,""]},"tatk.task.multiwoz.goal_generator.GoalGenerator":{__init__:[25,2,1,""],build_message:[25,2,1,""],get_user_goal:[25,2,1,""]},"tatk.util":{kb_query:[26,0,0,"-"]},"tatk.util.camrest":{dbquery:[27,0,0,"-"],lexicalize:[27,0,0,"-"],state:[27,0,0,"-"]},"tatk.util.camrest.dbquery":{query:[27,3,1,""]},"tatk.util.camrest.lexicalize":{deflat_da:[27,3,1,""],delexicalize_da:[27,3,1,""],flat_da:[27,3,1,""],lexicalize_da:[27,3,1,""]},"tatk.util.camrest.state":{default_state:[27,3,1,""]},"tatk.util.kb_query":{KBquery:[26,1,1,""]},"tatk.util.kb_query.KBquery":{__init__:[26,2,1,""],query:[26,2,1,""]},"tatk.util.multiwoz":{dbquery:[28,0,0,"-"],lexicalize:[28,0,0,"-"],multiwoz_slot_trans:[28,0,0,"-"],state:[28,0,0,"-"]},"tatk.util.multiwoz.dbquery":{query:[28,3,1,""]},"tatk.util.multiwoz.lexicalize":{deflat_da:[28,3,1,""],delexicalize_da:[28,3,1,""],flat_da:[28,3,1,""],lexicalize_da:[28,3,1,""]},"tatk.util.multiwoz.state":{default_state:[28,3,1,""]},tatk:{e2e:[8,0,0,"-"],task:[23,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"abstract":[3,4,10,14,21],"boolean":3,"case":[3,5],"class":[3,4,5,6,7,9,10,12,13,14,18,21,22,24,25,26],"default":5,"export":18,"final":5,"float":3,"function":[3,5,25],"int":5,"new":[3,7,21],"return":[3,4,5,7,10,12,13,14,21,22,27,28],"static":12,"true":[3,5,9,18,28],For:5,The:[3,4,5,7,10,14,21],__init__:[3,5,6,7,9,12,13,18,21,22,24,25,26],_data:[16,17,19,20],_templat:[12,13],accur:[5,6,7,9,18,21,22,26],accuraci:5,across:5,act:[3,5,10,14,21,22],action:[5,10,21,22],action_devector:[21,22],action_vec:[21,22],action_vector:22,activetupl:18,activetuples_s:18,actual_valu:18,add:[5,9],add_goal:9,add_sys_da:9,add_tag:18,add_usr_da:9,adopt:5,against:5,agent:[0,1,2,5,21],aggreg:[3,9,21],all:[5,9,16,17,19,20],all_acc:5,all_tag:16,allennlp_file_util:[0,1,2],almost:6,alwai:5,annot:[27,28],answer:9,api:3,applog_filenam:18,arg:[3,4,7,9,10,14,21,22,24,25],arrai:[5,9,21,22],attribut:3,auto:[12,13],auto_manu:[12,13],automit:3,avail:22,back:5,base:[3,4,5,6,7,9,10,12,13,14,18,21,22,24,25,26,27,28],basex:18,batch:18,batch_id:5,batch_no:5,batch_siz:5,belief:[3,5,27,28],belief_st:7,bert:[2,14],bertnlu:[16,17],better:5,between:7,bidir:5,bidirect:5,binary_output:5,bio:[16,17],bisess:3,boldifi:25,book:9,book_rat:9,bool:5,both:[12,13],build:[22,24,25],build_messag:[24,25],cachefeatur:18,calcul:18,calculate_s:18,call:18,camrest:[2,10,11,14,15,18,22,23,26],camrestvector:22,can:[3,5],cell:5,charact:22,classifi:[2,14],cn_ngram_merg:18,cn_ngram_prun:18,cn_ngram_replac:18,cnet:18,cnn:5,cnngram:18,coai:[22,24,25],code:[5,6],collect:[5,24,25],com:5,combin:[3,5],come:5,complet:[3,9],condit:[3,10],conduct:3,config:[18,19,20],config_fnam:18,consist:[3,5],constrain:26,constraint:[9,27,28],constructor:3,content:[0,1,10,25],continu:3,control:3,convert2acc:5,convert:5,corpu:[24,25],corpus_path:[24,25],counter:[24,25],cpu:5,creat:5,createdictionari:18,current:5,da1:[12,13],da2:[12,13],da_turn:9,das2tag:16,das:16,data:[3,5,6,12,13,16,17,19,20,22,24,25],data_dir:[5,6],data_kei:[16,17],databas:[3,19,20],datalistfil:18,dataload:[2,14],dataroot:18,dataset:[6,12,13],dataset_walk:[2,14],dbqueri:[2,26],decid:3,decod:[5,18],decode_s:18,decodetofil:18,default_st:[27,28],defin:5,define_cnn_model:5,deflat_da:[27,28],delexicalize_da:[27,28],delta:18,depend:3,detect:[5,7],detect_requestable_slot:5,dev:5,devic:5,dialog:[3,4,5,7,10,14,21,22,24,25],dialog_act:[4,7,12,13],dialog_ag:[0,1,2],dialog_histori:3,dialogu:5,dict:[3,4,5,7,9,10,12,13,14,21,22],dictionari:[5,18],dictionary_fnam:18,dimens:5,dimension:5,dir:[16,17,19,20],distanc:7,distributiontonbest:18,do_boldifi:25,domain:[5,7,9,16,17,22,27,28],domain_acc:5,domain_success:9,dst:[0,1,2,3,21],dst_util:[2,4],e2e:[0,1,2],each:5,edit:7,either:3,els:[3,21],embed:5,encod:5,end:3,ensur:3,entiti:[9,22,27,28],etc:5,evalu:[0,1,2,4,14,15,18],evaluate_model:5,everi:5,exact:5,exampl:[3,5,7,13],extract:[5,12,13],extractfeatur:18,extractfeatures2:18,fail:[12,13],fals:[5,18,25],featur:[2,5,14],file:[5,16,17,19,20],file_util:[0,1,2],filenam:[12,13,16,17,19,20],filepath:[16,17,19,20],finishingv:5,first:[3,12,13],firstli:3,fit:7,flat_da:[27,28],flexibl:3,fname:18,follow:3,form:[3,4,7],format:[3,10,16,17],from:[5,7,12,13],fuzzi:7,gate:5,gener:[3,5,10,12,13,24,25],generate_batch:5,generate_dict:[21,22],generic_to_specif:18,genericvalu:18,get:5,get_available_dev:5,get_cnngram:18,get_idx:16,get_metr:5,get_ngram:18,get_user_go:[24,25],github:5,given:[3,5,21,27,28],goal:[5,9,24,25],goal_gener:[2,23],goal_model:[24,25],goal_model_path:[24,25],goalgener:[24,25],gpu:5,gru:5,hash:5,have:[3,12,13],help:[5,6,7,9,18,21,22,26],here:3,hidden:5,histori:[3,5,7],home:[22,24,25],http:5,ignore_open:28,import_class:18,includ:3,index:[0,3,5],indic:[3,5],info:9,inform:9,inform_f1:9,init:[3,7,9,21,22],init_sess:[3,4,5,7,21],init_st:7,initi:[5,6,7,9,18,21,22,26],input:[3,5],instanc:3,integ:5,intent:[9,16,17],intent_fil:22,intent_vocab:[16,17],interfac:[3,4,10,14,21],intern:[4,7],is_gener:18,is_us:[12,13],json:[5,16,17,19,20,22],judg:9,kb_queri:[0,1,2,3],kbqueri:[3,26],knowledg:[3,26],label:[5,18],label_s:5,labels_filenam:18,langaug:[3,10],languag:[10,14],last:3,last_observ:3,lastsi:18,length:5,level:[3,4,7],lexic:[2,26],lexicalize_da:[27,28],like:3,line:5,list:[3,5,9,12,13,16,17,27,28],load:[5,18],load_data:5,load_ontolog:5,load_word_vector:5,load_woz_data:5,log:5,log_input_kei:18,log_turn:18,logp:18,logscor:18,lstm:5,lstm_model:5,m_h:5,mai:[12,13],mainli:5,make:3,makes_valid_act:18,manag:3,manner:5,manual:[12,13],map:[7,21,22],mask:5,match:[3,5,7,12,13],match_goal:5,max_length:18,max_ngram:18,max_num_turn:5,max_utterance_s:5,mdbt:[2,4],mdbt_util:[2,4],meet:9,mention:5,meta:[27,28],method:5,metric:5,mindist:7,minibatch:5,minimum:7,mode:[3,5,12,13,16,17,19,20],model:[2,4,5,6,10,14,18,21,24,25],model_definit:5,model_vari:5,models_fnam:18,modif:[12,13],modul:[0,1],multi:5,multiwoz:[2,4,5,10,11,12,14,15,18,22,23,26],multiwoz_ev:[0,1,2],multiwoz_slot_tran:[2,26],multiwozevalu:9,multiwozmdbt:6,multiwozvector:22,name:5,natur:[3,10,14],nbest:18,nbestlength:18,nbestscor:18,nbt:[4,7],net_typ:5,network:5,neural:[3,5],new_stat:[4,7],next:[3,21],next_ag:3,next_respons:3,next_turn:3,ngram:18,nlg:[0,1,2,3],nlg_model:3,nlu:[0,1,2,3,7],nlu_model:3,no_slot:5,no_turn:5,nomial_sampl:[24,25],none:[3,5,7,16,18,24,25],norm:5,normal:7,normalis:5,normalise_word_vector:5,normalize_histori:5,normalize_valu:7,note:5,null_boldifi:25,num:[5,22],num_filt:5,num_hidden:5,num_slot:5,number:[5,22],numpi:5,object:[3,4,5,9,10,14,18,21,24,25,26],observ:[3,5],one_hot_vector:22,onli:3,ontolog:[5,7,19,20],ontolog_term:5,ontology_camrest_:19,ontology_multiwoz_:20,ontology_s:5,ontology_vector:5,ops:5,origin:6,osmanio2:5,out:3,output:[5,14,16,17,19,20],output_fnam:18,output_s:5,packag:[0,1],page:0,pair:7,param:[5,12,13,18],paramat:3,paramet:[3,5,12,13],particular:22,path:[5,24,25],phrase:16,phrase_idx_utt:16,phrase_in_utt:16,pickc:18,pipelin:3,pipelineag:3,pkl:[16,17,24,25],placehold:5,pointer:22,polici:[0,1,2,3,10],postprocess:[2,14,15],powerset:18,pre:5,precis:5,pred_stat:5,predict:[5,14,18,21],prepar:3,preprocess:[2,14,15,18],previou:[4,5,7],previous_term:5,print_mod:5,process:[5,16,17,19,20],process_book:5,process_histori:5,process_text:5,process_turn:5,produc:[5,7,10],propag:5,properti:5,provid:5,python:[5,16,17,19,20],queri:[3,26,27,28],randomli:3,raw:7,read_json:[12,13],read_zipped_json:[16,17,19,20],recal:5,recov:[21,22],recurr:5,ref2goal:9,refer:0,replac:[5,18],repres:5,reqt:9,request:[9,27,28],request_st:7,requir:[16,17,19,20],reset:[3,5],respons:[3,5,10],restor:5,result:7,resultstat:5,reus:5,reward:3,rlmodul:[0,1,2],rnn:5,rnn_cell_impl:5,rnncell:5,rule:[2,4],rule_dst:[2,4],ruledst:7,run:5,run_test:5,same:[3,4,5,6,7],save:[6,18],save_fnam:18,score:[5,18],search:0,searchword:18,see:[5,6,7,9,18,21,22,26],seed:[24,25],select:9,self:[5,6,7,9,18,21,22,26],semi:5,sen:16,sentenc:[5,12,13,18],sentinfo:18,separ:21,sess:[5,6],session:[0,1,2,5,7,21],session_ov:3,set:[3,5,7],sever:3,sgd:18,should:[3,5],side:[16,17,19,20],signatur:[5,6,7,9,18,21,22,26],simul:3,singl:[3,5],size:5,skip_ngram:18,slot1:[12,13],slot:[5,7,9,12,13,16,17,18],slot_acc:5,some:3,sometim:[12,13],space:[5,7],speak:3,special:[3,7],special_match:7,start:7,state:[2,3,4,5,7,21,22,26],state_s:5,state_track:[0,1,2,5,7],state_vec:[21,22],state_vector:[21,22],statist:5,str:[3,4,7,10,14],str_similar:7,string_repn:18,submodul:[0,1,2,11,23],subpackag:[0,1],subtask:9,successfulli:9,summari:5,suppos:3,sure:3,sutil:[2,14],svm:[2,14],svm_to_libsvm:18,svmnlu:[19,20],sys:[16,17,19,20,22],sys_ag:3,sys_da:9,sys_respons:3,sys_uttr1:3,sys_uttr2:3,system:[3,5,12,13],system_respons:5,system_sentence_length:5,tag:[16,17],tag_vocab:[16,17],take:5,task:[0,1,2,7],task_success:9,templat:[12,13],template_nlg:[2,10],templatenlg:[12,13],temporari:5,tensorboard:5,tensorflow:5,tensorshap:5,test:[2,5,6,12,14,16,17,19,20],test_model:6,test_result:5,test_upd:6,text:5,text_input:5,thei:21,thi:[3,5],thing:3,this_tupl:18,through:5,thu:[22,24,25],time:5,togeth:21,token:[16,17],tool:3,tospars:18,track:5,track_dialogu:5,trackable_int:22,tracker:[3,4,5,7],train:[2,3,5,6,14,16,17,19,20],train_polici:3,train_util:[0,1,2],trainer:5,trainsvmwrapp:18,travi:[22,24,25],trivial:7,true_predict:5,tup:18,tupl:[2,4,5,7,14,21,22],tuple_calcul:18,tuple_distribut:18,tuple_to_act:18,turn:[3,5,22],turn_ind:3,two:3,type:[3,4,5,6,7,9,18,21,22,26],u_h:5,u_m:5,uact:18,uactstotupl:18,understand:[3,14],unit:5,unrol:5,updat:[4,5,7],url:5,usag:[16,17,18,19,20],use:[3,5,12,13,16,17,19,20],used:5,user:[3,5,12,13,24,25],user_act:[5,7],user_ag:3,user_first:3,user_go:[24,25],user_input:5,user_respons:3,user_sentence_length:5,user_uttr1:3,user_uttr2:3,using:3,usr:[16,17,19,20],usr_da:9,usr_input:5,util:[0,1,2],utt:16,utter:[5,10,14],utterance_length:5,val:[16,17,19,20],val_data:5,valid:[3,5],valu:[5,7,9,16,17,18],value1:[12,13],value_set:7,valueidentifi:18,variabl:[3,4,5,7,21],vec:[0,1,2,22],vector:[2,5,21],vector_camrest:[2,21],vector_dimens:5,vector_multiwoz:[2,21],verbos:[12,13],voc_fil:22,voc_opp_fil:22,w_h:5,w_m:5,want:3,when:[4,7,12,13,21],where:5,which:[3,5,7,10,16,17,19,20],without:[12,13],word1:7,word2:7,word:[3,4,5,7,16,17,18],word_dst:5,word_list:18,word_vector:5,woz3:5,xavier_vector:5,you:3,zero:5,zip:[16,17,19,20]},titles:["Welcome to tatk\u2019s documentation!","tatk","tatk package","tatk.dialog_agent package","tatk.dst package","tatk.dst.mdbt package","tatk.dst.mdbt.multiwoz package","tatk.dst.rule package","tatk.e2e package","tatk.evaluator package","tatk.nlg package","tatk.nlg.template_nlg package","tatk.nlg.template_nlg.camrest package","tatk.nlg.template_nlg.multiwoz package","tatk.nlu package","tatk.nlu.bert package","tatk.nlu.bert.camrest package","tatk.nlu.bert.multiwoz package","tatk.nlu.svm package","tatk.nlu.svm.camrest package","tatk.nlu.svm.multiwoz package","tatk.policy package","tatk.policy.vector package","tatk.task package","tatk.task.camrest package","tatk.task.multiwoz package","tatk.util package","tatk.util.camrest package","tatk.util.multiwoz package"],titleterms:{agent:3,allennlp_file_util:26,bert:[15,16,17],camrest:[12,16,19,24,27],classifi:18,content:[2,8,11,23],dataload:15,dataset_walk:18,dbqueri:[27,28],dialog_ag:3,document:0,dst:[4,5,6,7],dst_util:7,e2e:8,evalu:[5,7,9,16,17,19,20],featur:18,file_util:26,goal_gener:[24,25],indic:0,kb_queri:26,lexic:[27,28],mdbt:[5,6],mdbt_util:5,model:15,modul:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],multiwoz:[6,13,17,20,25,28],multiwoz_ev:9,multiwoz_slot_tran:28,nlg:[10,11,12,13],nlu:[14,15,16,17,18,19,20],packag:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],polici:[21,22],postprocess:[16,17],preprocess:[16,17,19,20],rlmodul:21,rule:7,rule_dst:7,session:3,state:[27,28],state_track:4,submodul:[3,4,5,6,7,9,10,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28],subpackag:[2,4,5,10,11,14,15,18,21,23,26],sutil:18,svm:[18,19,20],tabl:0,task:[23,24,25],tatk:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],template_nlg:[11,12,13],test:15,train:[15,18],train_util:26,tupl:18,util:[26,27,28],vec:21,vector:22,vector_camrest:22,vector_multiwoz:22,welcom:0}})