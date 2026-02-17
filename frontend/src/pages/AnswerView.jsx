import React from "react";
export default function AnswerView() {
	return (
		
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-neutral-50">
				<div className="flex items-center self-stretch bg-white py-[17px] px-[50px] border border-solid border-[#EAEAEA]">
					<div className="flex shrink-0 items-center mr-[199px] gap-[15px]">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/oowi6ygh_expires_30_days.png"} 
							className="w-[25px] h-[29px] object-fill"
						/>
						<span className="text-black text-base" >
							{"Neurooverflow"}
						</span>
					</div>
					<span className="text-[#808080] text-lg font-bold" >
						{"Open Question"}
					</span>
					<div className="flex-1 self-stretch">
					</div>
					<button className="flex shrink-0 items-center bg-[#F48023] text-left py-3 px-5 mr-[30px] gap-3 rounded-[5px] border-0"
						onClick={()=>alert("Pressed!")}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/hpcgx3a2_expires_30_days.png"} 
							className="w-[13px] h-[13px] rounded-[5px] object-fill"
						/>
						<span className="text-white text-xs font-bold" >
							{"Ask a question"}
						</span>
					</button>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/5t1t22se_expires_30_days.png"} 
						className="w-6 h-[31px] mr-[30px] object-fill"
					/>
					<div className="flex shrink-0 items-center gap-3.5">
						<div className="flex flex-col shrink-0 items-start bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/dq2xxgtg_expires_30_days.png')] bg-cover bg-center pb-[35px] pl-[34px]">
							<div className="flex flex-col items-start bg-[#F48023] py-[3px] px-[5px] rounded-[10px] border border-solid border-white">
								<span className="text-white text-[10px]" >
									{"0"}
								</span>
							</div>
						</div>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/7pmvwpyh_expires_30_days.png"} 
							className="w-1.5 h-1.5 object-fill"
						/>
					</div>
				</div>
				<div className="flex items-start self-stretch mr-[81px] gap-[9px]">
					<div className="flex flex-col shrink-0 items-start bg-white pt-10">
						<div className="flex items-center bg-white py-[11px] mb-[30px]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/9it4gci1_expires_30_days.png"} 
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
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/m613pl7s_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
								/>
								<span className="text-black text-[13px] mr-[168px]" >
									{"Questions"}
								</span>
							</div>
							<div className="flex items-center bg-white py-[11px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/pu795sxy_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
								/>
								<span className="text-black text-[13px] mr-[201px]" >
									{"Tags"}
								</span>
							</div>
							<div className="flex items-center bg-white py-[11px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/qhj52ecl_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
								/>
								<span className="text-black text-[13px] mr-[181px]" >
									{"Ranking"}
								</span>
							</div>
						</div>
						<div className="flex flex-col items-start gap-2.5">
							<span className="text-[#808080] text-xs ml-[50px]" >
								{"PERSONAL NAVIGATOR"}
							</span>
							<div className="flex items-center bg-[#FCF4EC]">
								<div className="bg-[#F48023] w-[5px] h-[41px] mr-[45px]">
								</div>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/jk4e0ht1_expires_30_days.png"} 
									className="w-[18px] h-[18px] mr-3 object-fill"
								/>
								<span className="text-[#F48023] text-[13px] font-bold mr-[135px]" >
									{"Your questions"}
								</span>
							</div>
							<div className="flex items-center bg-white py-[11px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/h150yotj_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
								/>
								<span className="text-black text-[13px] mr-[145px]" >
									{"Your answers"}
								</span>
							</div>
							<div className="flex items-center bg-white py-[11px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/qw08uwcb_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-[50px] mr-3 object-fill"
								/>
								<span className="text-black text-[13px] mr-[117px]" >
									{"Your likes & votes"}
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-1 items-start gap-[45px]">
						<div className="flex flex-1 flex-col items-center gap-5">
							<div className="flex flex-col items-start self-stretch bg-white py-[50px] pr-10 gap-5 rounded-[5px]" 
								style={{
									boxShadow: "2px 1px 5px #00000026"
								}}>
								<div className="flex items-center self-stretch ml-10">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/4rhb9pqa_expires_30_days.png"} 
										className="w-10 h-10 mr-[15px] object-fill"
									/>
									<div className="flex flex-col shrink-0 items-start gap-[5px]">
										<span className="text-black text-[13px] mr-10" >
											{"@Golanginya"}
										</span>
										<span className="text-[#808080] text-[10px]" >
											{"12 November 2020 19:35"}
										</span>
									</div>
									<div className="flex-1 self-stretch">
									</div>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/a2lww5bx_expires_30_days.png"} 
										className="w-6 h-6 object-fill"
									/>
								</div>
								<span className="text-black text-lg font-bold ml-10" >
									{"How to patch KDE on FreeBSD?"}
								</span>
								<span className="text-black text-sm ml-10" >
									{"Mi magna sed nec nisl mattis. Magna cursus tincidunt rhoncus imperdiet fermentum pretium, pharetra nisl. Euismod."}
								</span>
								<div className="flex items-center self-stretch bg-[#EAEAEA] py-2.5 ml-10">
									<span className="text-[#857857] text-sm text-center w-[7px] mx-4" >
										{"1\n2\n3\n4\n5\n6\n7"}
									</span>
									<span className="text-black text-sm w-[196px]" >
										{"package mian\n\nimport “fmt”\n\nfunc main() {\n      fmt.Println(“Hello, world!”)\n}"}
									</span>
								</div>
								<span className="text-black text-sm ml-10" >
									{"Posuere arcu arcu consectetur turpis rhoncus tellus. Massa, consectetur massa sit fames nulla eu vehicula ullamcorper. Ante sit mauris elementum sollicitudin arcu sit suspendisse pretium. Nisl egestas fringilla justo bibendum."}
								</span>
								<div className="flex justify-between items-center self-stretch bg-white ml-10">
									<div className="flex shrink-0 items-center gap-2.5">
										<button className="flex flex-col shrink-0 items-start bg-[#EAEAEA] text-left py-[5px] px-2.5 rounded-[5px] border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#808080] text-[10px]" >
												{"java"}
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#EAEAEA] text-left py-[5px] px-2.5 rounded-[5px] border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#808080] text-[10px]" >
												{"javascript"}
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-[#EAEAEA] text-left py-[5px] px-2.5 rounded-[5px] border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#808080] text-[10px]" >
												{"wtf"}
											</span>
										</button>
									</div>
																		<button className="flex shrink-0 items-center bg-[#1682FD] text-left py-2 px-5 gap-3 rounded-[5px] border-0"
																			onClick={()=>alert("Pressed!")}>
																			<img
																				src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/4j9QAmMJn9/zu5mx4iv_expires_30_days.png"} 
																				className="w-[13px] h-[13px] rounded-[5px] object-fill"
																			/>
																			<span className="text-white text-xs font-bold" >
																				{"Vote"}
																			</span>
																		</button>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										);
									}

