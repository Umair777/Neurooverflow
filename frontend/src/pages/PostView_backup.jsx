import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostView({ questions }) {
	const navigate = useNavigate();
	return (
		
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-neutral-50">
				<div className="flex items-center self-stretch bg-white py-[17px] px-[50px] border border-solid border-[#EAEAEA]">
					<div className="flex shrink-0 items-center mr-[200px] gap-[15px]">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/wjjf4b57_expires_30_days.png"} 
							className="w-[25px] h-[29px] object-fill"
						/>
						<span className="text-black text-base" >
							{"Neurooverflow"}
						</span>
					</div>
					<span className="text-[#808080] text-lg font-bold" >
						{"New Question"}
					</span>
					<div className="flex-1 self-stretch">
					</div>
					<button className="flex shrink-0 items-center bg-[#F48023] text-left py-3 px-5 mr-[30px] gap-3 rounded-[5px] border-0"
						onClick={()=>alert("Pressed!")}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/fixkm6rc_expires_30_days.png"} 
							className="w-[13px] h-[13px] rounded-[5px] object-fill"
						/>
						<span className="text-white text-xs font-bold" >
							{"Ask a question"}
						</span>
					</button>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/n9jzp7ev_expires_30_days.png"} 
						className="w-6 h-[31px] mr-[30px] object-fill"
					/>
					<div className="flex shrink-0 items-center gap-3.5">
						<div className="flex flex-col shrink-0 items-start bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/5dp2tsbj_expires_30_days.png')] bg-cover bg-center pb-[35px] pl-[34px]">
							<div className="flex flex-col items-start bg-[#F48023] py-[3px] px-[5px] rounded-[10px] border border-solid border-white">
								<span className="text-white text-[10px]" >
									{"0"}
								</span>
							</div>
						</div>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/164s7jjt_expires_30_days.png"} 
							className="w-1.5 h-1.5 object-fill"
						/>
					</div>
				</div>
				<div className="flex items-start self-stretch mr-[50px] gap-[45px]">
					<div className="flex flex-col shrink-0 items-start bg-white pt-10">
						<div className="flex items-center bg-white py-[11px] mb-[30px]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/nfnghlyg_expires_30_days.png"} 
								className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
							/>
							<span className="text-black text-[13px] mr-[188px]" >
								{"Search"}
							</span>
						</div>
						<div className="flex flex-col items-start mb-[30px] gap-2.5">
							<span className="text-[#808080] text-xs ml-[50px]" >
								{"menu"}
							</span>
							<div className="flex items-center bg-white py-[11px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/cjqgky9y_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
								/>
								<span className="text-black text-[13px] mr-[168px]" >
									{"Questions"}
								</span>
							</div>
							<div className="flex items-center bg-white py-[11px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/j77qnbtr_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
								/>
								<span className="text-black text-[13px] mr-[201px]" >
									{"Tags"}
								</span>
							</div>
							<div className="flex items-center bg-white py-[11px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/or3z3wmr_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
								/>
								<span className="text-black text-[13px] mr-[181px]" >
									{"Ranking"}
								</span>
							</div>
						</div>
						<div className="flex flex-col items-start mb-[341px] gap-2.5">
							<span className="text-[#808080] text-xs ml-[50px]" >
								{"PERSONAL NAVIGATOR"}
							</span>
							<div className="flex items-center bg-[#FCF4EC]">
								<div className="bg-[#F48023] w-[5px] h-[41px] mr-[45px]">
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/81hpilkl_expires_30_days.png"} 
									className="w-[18px] h-[18px] mr-3 object-fill"
								/>
								<span className="text-[#F48023] text-[13px] font-bold mr-[135px]" >
									{"Your questions"}
								</span>
							</div>
							<div className="flex items-center bg-white py-[11px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/ufovupci_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
								/>
								<span className="text-black text-[13px] mr-[145px]" >
									{"Your answers"}
								</span>
							</div>
							<div className="flex items-center bg-white py-[11px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/qq44uy71_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
								/>
								<span className="text-black text-[13px] mr-[117px]" >
									{"Your likes & votes"}
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-1 items-start mt-8 gap-[45px]">
						<div className="flex flex-1 flex-col bg-white py-[30px] px-10 gap-5" 
							style={{
								boxShadow: "2px 1px 5px #00000026"
							}}>
							{/* <div className="flex justify-between items-center self-stretch py-[5px] px-2.5 rounded-[5px] border-2 border-solid border-[#EAEAEA]">
								<div className="flex flex-col shrink-0 items-start pb-[1px]">
									<span className="text-[#808080] text-xs" >
										{"Choose categorie"}
									</span>
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/3pxfaepx_expires_30_days.png"} 
									className="w-11 h-6 rounded-[5px] object-fill"
								/>
							</div>
							<div className="flex flex-col items-start self-stretch pt-2.5 pb-[11px] pl-2.5 rounded-[5px] border-2 border-solid border-[#EAEAEA]">
								<span className="text-[#808080] text-xs" >
									{"Type catching attention title"}
								</span>
							</div> */}
							
							<textarea
  placeholder="Type your question"
  className="w-full min-h-[321px] p-3 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
/>
							<div className="flex justify-between items-center self-stretch">
								<button className="flex shrink-0 items-center bg-[#1682FD] text-left py-2 px-5 gap-3 rounded-[5px] border-0"
									onClick={()=>alert("Pressed!")}>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/yfenuh3n_expires_30_days.png"} 
										className="w-[13px] h-[13px] rounded-[5px] object-fill"
									/>
									<span className="text-white text-xs font-bold" >
										{"Add Image"}
									</span>
								</button>
								<div className="flex shrink-0 items-center gap-5">
									<button className="flex flex-col shrink-0 items-start bg-[#EAEAEA] text-left py-2 px-5 rounded-[5px] border-0"
										onClick={()=>alert("Pressed!")}>
										<span className="text-[#808080] text-xs" >
											{"Save as draft"}
										</span>
									</button>
									<button className="flex shrink-0 items-center bg-[#F48023] text-left py-2 px-5 gap-3 rounded-[5px] border-0"
										onClick={()=>navigate("/answer")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/sd7bdvbx_expires_30_days.png"} 
											className="w-[13px] h-[13px] rounded-[5px] object-fill"
										/>
										<span className="text-white text-xs font-bold" >
											{"Publish"}
										</span>
									</button>
								</div>
							</div>
						</div>
						<div className="flex flex-col shrink-0 items-start bg-white py-[30px] px-5 gap-10 rounded-[5px] border border-solid border-[#EAEAEA]" 
							style={{
								boxShadow: "0px 0px 5px #0000000D"
							}}>
							<div className="flex flex-col items-start gap-[9px]">
								<div className="flex flex-col items-start gap-2.5">
									<div className="flex items-center mr-[105px] gap-1.5">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/k7dy1iz3_expires_30_days.png"} 
											className="w-[18px] h-[18px] object-fill"
										/>
										<span className="text-black text-[13px]" >
											{"Must-read posts"}
										</span>
									</div>
									<div className="bg-[#EAEAEA] w-[230px] h-[1px]">
									</div>
								</div>
								<div className="flex flex-col items-start gap-2.5">
									<div className="flex items-start">
										<span className="text-[#1682FD] text-2xl ml-[5px] mr-[7px]" >
											{"•"}
										</span>
										<span className="text-[#1682FD] text-[11px] w-[174px] mr-[39px]" >
											{"Please read rules before you start working on a platform"}
										</span>
									</div>
									<div className="flex items-center">
										<span className="text-[#1682FD] text-2xl ml-[5px] mr-[7px]" >
											{"•"}
										</span>
										<span className="text-[#1682FD] text-[11px] mr-[60px]" >
											{"Vision & Strategy of Alemhelp"}
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start gap-[9px]">
								<div className="flex flex-col items-start gap-2.5">
									<div className="flex items-center mr-[119px] gap-1.5">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/7bcov1np_expires_30_days.png"} 
											className="w-[18px] h-[18px] object-fill"
										/>
										<span className="text-black text-[13px]" >
											{"Featured links"}
										</span>
									</div>
									<div className="bg-[#EAEAEA] w-[230px] h-[1px]">
									</div>
								</div>
								<div className="flex flex-col items-start gap-2.5">
									<div className="flex items-center">
										<span className="text-[#1682FD] text-2xl ml-[5px] mr-[7px]" >
											{"•"}
										</span>
										<span className="text-[#1682FD] text-[11px] mr-11" >
											{"Alemhelp source-code on GitHub"}
										</span>
									</div>
									<div className="flex items-center">
										<span className="text-[#1682FD] text-2xl ml-[5px] mr-[7px]" >
											{"•"}
										</span>
										<span className="text-[#1682FD] text-[11px] mr-[101px]" >
											{"Golang best-practices"}
										</span>
									</div>
									<div className="flex items-center">
										<span className="text-[#1682FD] text-2xl ml-[5px] mr-[7px]" >
											{"•"}
										</span>
										<span className="text-[#1682FD] text-[11px] mr-[91px]" >
											{"Alem.School dashboard"}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}