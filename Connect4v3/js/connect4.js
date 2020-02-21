$("document").ready(function()
			{
				var column1ClickCount = 0;
				var column1Clicked = false;
				var column2ClickCount = 0;
				var column2Clicked = false;
				var column3ClickCount = 0;
				var column3Clicked = false;
				var column4ClickCount = 0;
				var column4Clicked = false;
				var column5ClickCount = 0;
				var column5Clicked = false;
				var position1 = "";
				var position2 = "";
				var position3 = "";
				var position4 = "";
				var position5 = "";
				var position6 = "";
				var position7 = "";
				var position8 = "";
				var position9 = "";
				var position10 = "";
				var position11 = "";
				var position12 = "";
				var position13 = "";
				var position14 = "";
				var position15 = "";
				var position16 = "";
				var position17 = "";
				var position18 = "";
				var position19 = "";
				var position20 = "";
				var position21 = "";
				var position22 = "";
				var position23 = "";
				var position24 = "";
				var position25 = "";
				var turnFlag = 0;
				var overFiveCheck = 0;
				var yellowWinCount = 0;
				var redWinCount = 0;
				var tieCount = 0;
				
				$(".column1").click(function() 
				{
					column1Clicked = true;
					column1ClickCount += 1;
					if(turnFlag == 0)
					{
						overFiveCheck = 0;
						redMove();
						if(overFiveCheck == 0)
						{
							turnFlag = 1;
						}
						else
						{
							overFiveCheck = 0;
							redMove();
						}
					}
					else if(turnFlag == 1)
					{
						overFiveCheck = 0;
						yellowMove();
						if(overFiveCheck == 0)
						{
							turnFlag = 0;
						}
						else
						{
							overFiveCheck = 0;
							yellowMove();
						}
					}
				});
				$(".column2").click(function() 
				{
					column2Clicked = true;
					column2ClickCount += 1;
					if(turnFlag == 0)
					{
						overFiveCheck = 0;
						redMove();
						if(overFiveCheck == 0)
						{
							turnFlag = 1;
						}
						else
						{
							overFiveCheck = 0;
							redMove();
						}
					}
					else if(turnFlag == 1)
					{
						overFiveCheck = 0;
						yellowMove();
						if(overFiveCheck == 0)
						{
							turnFlag = 0;
						}
						else
						{
							overFiveCheck = 0;
							yellowMove();
						}
					}
				});
				$(".column3").click(function() 
				{
					column3Clicked = true;
					column3ClickCount += 1;
					if(turnFlag == 0)
					{
						overFiveCheck = 0;
						redMove();
						if(overFiveCheck == 0)
						{
							turnFlag = 1;
						}
						else
						{
							overFiveCheck = 0;
							redMove();
						}
					}
					else if(turnFlag == 1)
					{
						overFiveCheck = 0;
						yellowMove();
						if(overFiveCheck == 0)
						{
							turnFlag = 0;
						}
						else
						{
							overFiveCheck = 0;
							yellowMove();
						}
					}
				});
				$(".column4").click(function() 
				{
					column4Clicked = true;
					column4ClickCount += 1;
					if(turnFlag == 0)
					{
						overFiveCheck = 0;
						redMove();
						if(overFiveCheck == 0)
						{
							turnFlag = 1;
						}
						else
						{
							overFiveCheck = 0;
							redMove();
						}
					}
					else if(turnFlag == 1)
					{
						overFiveCheck = 0;
						yellowMove();
						if(overFiveCheck == 0)
						{
							turnFlag = 0;
						}
						else
						{
							overFiveCheck = 0;
							yellowMove();
						}
					}
				});
				$(".column5").click(function() 
				{
					column5Clicked = true;
					column5ClickCount += 1;
					if(turnFlag == 0)
					{
						overFiveCheck = 0;
						redMove();
						if(overFiveCheck == 0)
						{
							turnFlag = 1;
						}
						else
						{
							overFiveCheck = 0;
							redMove();
						}
					}
					else if(turnFlag == 1)
					{
						overFiveCheck = 0;
						yellowMove();
						if(overFiveCheck == 0)
						{
							turnFlag = 0;
						}
						else
						{
							overFiveCheck = 0;
							yellowMove();
						}
					}
				});
				
				function redMove()
				{
					if(column1Clicked)
					{
						if(column1ClickCount == 1)
						{
							$(".red11").animate({top: '821px'}, 1400);
							position1 = "red";
						}
						else if(column1ClickCount == 2)
						{
							$(".red12").animate({top: '616px'}, 1400);
							position6 = "red";
						}
						else if(column1ClickCount == 3)
						{
							$(".red13").animate({top: '414px'}, 1400);
							position11 = "red";
						}
						else if(column1ClickCount == 4)
						{
							$(".red14").animate({top: '206px'}, 1400);
							position16 = "red";
						}
						else if(column1ClickCount == 5)
						{
							$(".red15").animate({top: '1px'}, 1400);
							position21 = "red";
						}
						else if(column1ClickCount > 5)
						{
							overFiveCheck = 1;
						}
						column1Clicked = false;
						checkForWin();
					}
					else if(column2Clicked)
					{
						if(column2ClickCount == 1)
						{
							$(".red21").animate({top: '821px'}, 1400);
							position2 = "red";
						}
						else if(column2ClickCount == 2)
						{
							$(".red22").animate({top: '616px'}, 1400);
							position7 = "red";
						}
						else if(column2ClickCount == 3)
						{
							$(".red23").animate({top: '414px'}, 1400);
							position12 = "red";
						}
						else if(column2ClickCount == 4)
						{
							$(".red24").animate({top: '206px'}, 1400);
							position17 = "red";
						}
						else if(column2ClickCount == 5)
						{
							$(".red25").animate({top: '1px'}, 1400);
							position22 = "red";
						}
						else if(column2ClickCount > 5)
						{
							overFiveCheck = 1;
						}
						column2Clicked = false;
						checkForWin();
					}
					else if(column3Clicked)
					{
						if(column3ClickCount == 1)
						{
							$(".red31").animate({top: '821px'}, 1400);
							position3 = "red";
						}
						else if(column3ClickCount == 2)
						{
							$(".red32").animate({top: '616px'}, 1400);
							position8 = "red";
						}
						else if(column3ClickCount == 3)
						{
							$(".red33").animate({top: '414px'}, 1400);
							position13 = "red";
						}
						else if(column3ClickCount == 4)
						{
							$(".red34").animate({top: '206px'}, 1400);
							position18 = "red";
						}
						else if(column3ClickCount == 5)
						{
							$(".red35").animate({top: '1px'}, 1400);
							position23 = "red";
						}
						else if(column3ClickCount > 5)
						{
							overFiveCheck = 1;
						}
						column3Clicked = false;
						checkForWin();
					}
					else if(column4Clicked)
					{
						if(column4ClickCount == 1)
						{
							$(".red41").animate({top: '821px'}, 1400);
							position4 = "red";
						}
						else if(column4ClickCount == 2)
						{
							$(".red42").animate({top: '616px'}, 1400);
							position9 = "red";
						}
						else if(column4ClickCount == 3)
						{
							$(".red43").animate({top: '414px'}, 1400);
							position14 = "red"
						}
						else if(column4ClickCount == 4)
						{
							$(".red44").animate({top: '206px'}, 1400);
							position19 = "red";
						}
						else if(column4ClickCount == 5)
						{
							$(".red45").animate({top: '1px'}, 1400);
							position24 = "red";
						}
						else if(column4ClickCount > 5)
						{
							overFiveCheck = 1;
						}
						column4Clicked = false;
						checkForWin();
					}
					else if(column5Clicked)
					{
						if(column5ClickCount == 1)
						{
							$(".red51").animate({top: '821px'}, 1400);
							position5 = "red";
						}
						else if(column5ClickCount == 2)
						{
							$(".red52").animate({top: '616px'}, 1400);
							position10 = "red";
						}
						else if(column5ClickCount == 3)
						{
							$(".red53").animate({top: '414px'}, 1400);
							position15 = "red";
						}
						else if(column5ClickCount == 4)
						{
							$(".red54").animate({top: '206px'}, 1400);
							position20 = "red";
						}
						else if(column5ClickCount == 5)
						{
							$(".red55").animate({top: '1px'}, 1400);
							position25 = "red";
						}
						else if(column5ClickCount > 5)
						{
							overFiveCheck = 1;
						}
						column5Clicked = false;
						checkForWin();
					}
				}
				function yellowMove()
				{
					if(column1Clicked)
					{
						if(column1ClickCount == 1)
						{
							$(".yellow11").animate({top: '821px'}, 1400);
							position1 = "yellow";
						}
						else if(column1ClickCount == 2)
						{
							$(".yellow12").animate({top: '616px'}, 1400);
							position6 = "yellow";
						}
						else if(column1ClickCount == 3)
						{
							$(".yellow13").animate({top: '414px'}, 1400);
							position11 = "yellow";
						}
						else if(column1ClickCount == 4)
						{
							$(".yellow14").animate({top: '206px'}, 1400);
							position16 = "yellow";
						}
						else if(column1ClickCount == 5)
						{
							$(".yellow15").animate({top: '1px'}, 1400);
							position21 = "yellow";
						}
						else if(column1ClickCount > 5)
						{
							overFiveCheck = 1;
						}
						column1Clicked = false;
						checkForWin();
					}
					else if(column2Clicked)
					{
						if(column2ClickCount == 1)
						{
							$(".yellow21").animate({top: '821px'}, 1400);
							position2 = "yellow";
						}
						else if(column2ClickCount == 2)
						{
							$(".yellow22").animate({top: '616px'}, 1400);
							position7 = "yellow";
						}
						else if(column2ClickCount == 3)
						{
							$(".yellow23").animate({top: '414px'}, 1400);
							position12 = "yellow";
						}
						else if(column2ClickCount == 4)
						{
							$(".yellow24").animate({top: '206px'}, 1400);
							position17 = "yellow";
						}
						else if(column2ClickCount == 5)
						{
							$(".yellow25").animate({top: '1px'}, 1400);
							position22 = "yellow";
						}
						else if(column2ClickCount > 5)
						{
							overFiveCheck = 1;
						}
						column2Clicked = false;
						checkForWin();
					}
					else if(column3Clicked)
					{
						if(column3ClickCount == 1)
						{
							$(".yellow31").animate({top: '821px'}, 1400);
							position3 = "yellow";
						}
						else if(column3ClickCount == 2)
						{
							$(".yellow32").animate({top: '616px'}, 1400);
							position8 = "yellow";
						}
						else if(column3ClickCount == 3)
						{
							$(".yellow33").animate({top: '414px'}, 1400);
							position13 = "yellow";
						}
						else if(column3ClickCount == 4)
						{
							$(".yellow34").animate({top: '206px'}, 1400);
							position18 = "yellow";
						}
						else if(column3ClickCount == 5)
						{
							$(".yellow35").animate({top: '1px'}, 1400);
							position23 = "yellow";
						}
						else if(column3ClickCount > 5)
						{
							overFiveCheck = 1;
						}
						column3Clicked = false;
						checkForWin();
					}
					else if(column4Clicked)
					{
						if(column4ClickCount == 1)
						{
							$(".yellow41").animate({top: '821px'}, 1400);
							position4 = "yellow";
						}
						else if(column4ClickCount == 2)
						{
							$(".yellow42").animate({top: '616px'}, 1400);
							position9 = "yellow";
						}
						else if(column4ClickCount == 3)
						{
							$(".yellow43").animate({top: '414px'}, 1400);
							position14 = "yellow";
						}
						else if(column4ClickCount == 4)
						{
							$(".yellow44").animate({top: '206px'}, 1400);
							position19 = "yellow";
						}
						else if(column4ClickCount == 5)
						{
							$(".yellow45").animate({top: '1px'}, 1400);
							position24 = "yellow";
						}
						else if(column4ClickCount > 5)
						{
							overFiveCheck = 1;
						}
						column4Clicked = false;
						checkForWin();
					}
					else if(column5Clicked)
					{
						if(column5ClickCount == 1)
						{
							$(".yellow51").animate({top: '821px'}, 1400);
							position5 = "yellow";
						}
						else if(column5ClickCount == 2)
						{
							$(".yellow52").animate({top: '616px'}, 1400);
							position10 = "yellow";
						}
						else if(column5ClickCount == 3)
						{
							$(".yellow53").animate({top: '414px'}, 1400);
							position15 = "yellow";
						}
						else if(column5ClickCount == 4)
						{
							$(".yellow54").animate({top: '206px'}, 1400);
							position20 = "yellow";
						}
						else if(column5ClickCount == 5)
						{
							$(".yellow55").animate({top: '1px'}, 1400);
							position25 = "yellow";
						}
						else if(column5ClickCount > 5)
						{
							overFiveCheck = 1;
						}
						column5Clicked = false;
						checkForWin();
						}
				}
				
				function checkForWin()
				{
											//Yellow win
					if((position1 == "yellow") && (position2 == "yellow") && (position3 == "yellow") && (position4 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position1 == "yellow") && (position6 == "yellow") && (position11 == "yellow") && (position16 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position2 == "yellow") && (position7 == "yellow") && (position12 == "yellow") && (position17 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position3 == "yellow") && (position8 == "yellow") && (position13 == "yellow") && (position18 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position4 == "yellow") && (position9 == "yellow") && (position14 == "yellow") && (position19 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position5 == "yellow") && (position10 == "yellow") && (position15 == "yellow") && (position20 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position6 == "yellow") && (position11 == "yellow") && (position16 == "yellow") && (position21 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position7 == "yellow") && (position12 == "yellow") && (position17 == "yellow") && (position22 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position8 == "yellow") && (position13 == "yellow") && (position18 == "yellow") && (position23 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position9 == "yellow") && (position14 == "yellow") && (position19 == "yellow") && (position24 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position10 == "yellow") && (position15 == "yellow") && (position20 == "yellow") && (position25 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position2 == "yellow") && (position3 == "yellow") && (position4 == "yellow") && (position5 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position7 == "yellow") && (position8 == "yellow") && (position9 == "yellow") && (position10 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position12 == "yellow") && (position13 == "yellow") && (position14 == "yellow") && (position15 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position17 == "yellow") && (position18 == "yellow") && (position19 == "yellow") && (position20 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position22 == "yellow") && (position23 == "yellow") && (position24 == "yellow") && (position25 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position22 == "yellow") && (position18 == "yellow") && (position14 == "yellow") && (position10 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position16 == "yellow") && (position12 == "yellow") && (position8 == "yellow") && (position4 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position17 == "yellow") && (position13 == "yellow") && (position9 == "yellow") && (position5 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position21 == "yellow") && (position17 == "yellow") && (position13 == "yellow") && (position9 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position25 == "yellow") && (position19 == "yellow") && (position13 == "yellow") && (position7 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position19 == "yellow") && (position13 == "yellow") && (position7 == "yellow") && (position1 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position20 == "yellow") && (position14 == "yellow") && (position8 == "yellow") && (position2 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position6 == "yellow") && (position12 == "yellow") && (position18 == "yellow") && (position24 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position6 == "yellow") && (position7 == "yellow") && (position8 == "yellow") && (position9 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position11 == "yellow") && (position12 == "yellow") && (position13 == "yellow") && (position14 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position16 == "yellow") && (position17 == "yellow") && (position18 == "yellow") && (position19 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					else if((position21 == "yellow") && (position22 == "yellow") && (position23 == "yellow") && (position24 == "yellow"))
					{
						console.log("Yellow win");
						yellowWinCount += 1;
					}
					
											//Red win
					
					else if((position1 == "red") && (position2 == "red") && (position3 == "red") && (position4 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position1 == "red") && (position6 == "red") && (position11 == "red") && (position16 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position2 == "red") && (position7 == "red") && (position12 == "red") && (position17 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position3 == "red") && (position8 == "red") && (position13 == "red") && (position18 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position4 == "red") && (position9 == "red") && (position14 == "red") && (position19 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position5 == "red") && (position10 == "red") && (position15 == "red") && (position20 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position6 == "red") && (position11 == "red") && (position16 == "red") && (position21 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position7 == "red") && (position12 == "red") && (position17 == "red") && (position22 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position8 == "red") && (position13 == "red") && (position18 == "red") && (position23 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position9 == "red") && (position14 == "red") && (position19 == "red") && (position24 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position10 == "red") && (position15 == "red") && (position20 == "red") && (position25 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position2 == "red") && (position3 == "red") && (position4 == "red") && (position5 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position7 == "red") && (position8 == "red") && (position9 == "red") && (position10 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position12 == "red") && (position13 == "red") && (position14 == "red") && (position15 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position17 == "red") && (position18 == "red") && (position19 == "red") && (position20 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position22 == "red") && (position23 == "red") && (position24 == "red") && (position25 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position22 == "red") && (position18 == "red") && (position14 == "red") && (position10 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position16 == "red") && (position12 == "red") && (position8 == "red") && (position4 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position17 == "red") && (position13 == "red") && (position9 == "red") && (position5 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position21 == "red") && (position17 == "red") && (position13 == "red") && (position9 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position25 == "red") && (position19 == "red") && (position13 == "red") && (position7 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position19 == "red") && (position13 == "red") && (position7 == "red") && (position1 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position20 == "red") && (position14 == "red") && (position8 == "red") && (position2 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position6 == "red") && (position12 == "red") && (position18 == "red") && (position24 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position6 == "red") && (position7 == "red") && (position8 == "red") && (position9 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position11 == "red") && (position12 == "red") && (position13 == "red") && (position14 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position16 == "red") && (position17 == "red") && (position18 == "red") && (position19 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
					else if((position21 == "red") && (position22 == "red") && (position23 == "red") && (position24 == "red"))
					{
						console.log("Red win");
						redWinCount += 1;
					}
									//Tie
					else if((column1ClickCount >= 5) && (column2ClickCount >= 5) && (column3ClickCount >= 5) && (column4ClickCount >= 5) && (column5ClickCount >= 5))
					{
						console.log("Tie game");
						tieCount += 1;
					}
				}
			});