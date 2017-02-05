<!-- config-corn start-->
<div class="corn" id="a8">
    <input type="hidden" id="nowdisplay" value="Daily">
    <ul class="nav-tabs nav-border-none corn_ul"style="margin-left: -40px;">
        <li class="active"><a data-toggle="tab" href="#tc00">时</a></li>
        <li><a data-toggle="tab" href="#tc10"
               onClick="display('Daily')">天</a></li>
        <li><a data-toggle="tab" href="#tc20"
               onClick="display('Weekly')">周</a></li>
        <li><a data-toggle="tab" href="#tc30"
               onClick="display('Monthly')">月</a></li>
    </ul>
    <!--每个标签页对应一个面板-->
    <div class="tab-content">
        <div id="tc00" class="tab-pane active fade in  corn_run">
            <div class="radio">
                <div class=" well well-small" style="min-height: 332px;">
                    <div style="height: 40px"></div>
                    执行时间：
                    <select id="hourPart" class="sel">
                        <option value="0">00</option>
                        <option value="1">01</option>
                        <option value="2">02</option>

                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>

                        <option selected="selected" value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>

                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                    </select>点</td>

                    <td><select id="minutePart" class="sel">
                        <option selected="selected" value="0">00</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>

                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>

                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>

                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>

                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>

                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>

                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="58">58</option>
                        <option value="59">59</option>
                    </select> 分
                </div>
            </div>

        </div>
        <div id="tc10" class="tab-pane fade in  corn_run">
            <div class="radio">
                <div class="well well-small">
                    <input class="pad_input" type="radio" name="day"
                           checked onclick="everyTime(this)"> 每天
                </div>
            </div>
            <div class="radio">
                <div class="well well-small">
                    <input type="radio" name="day" id="latestDay"
                           class="pad_input"> 从
                    <input class="day1 input_com" type="number" max="31"
                           min="1" value="1" id="dayStart_1"> 日开始,每
                    <input class="day1 input_com" type="number" max="31"
                           min="1" value="1" id="dayEnd_1"> 天执行一次
                </div>
            </div>
            <div class="radio">
                <div class="well well-small">
                    <input type="radio" name="day" id="every_day"
                           class="pad_input">
                    每月<input id="eve_day" class="input_com" value="1"
                             type="number" max="31" min="1"> 号最近的那个工作日
                </div>
            </div>
            <div class="radio">
                <div class="well well-small" class="pad_input">
                    <input type="radio" name="day" onclick="lastDay()">
                    每月的最后一天执行
                </div>
            </div>
            <div class="radio">
                <div class="well well-small">
                    <input type="radio" name="day" id="day_appoint"
                           class="pad_input">
                    <span>指定</span>
                    <div class="dayList list"
                         style="padding-left:15px;">
                        <label class="">
                            <input type="checkbox" value="1">01
                        </label>
                        <label class=" ">
                            <input type="checkbox" value="2">02
                        </label>
                        <label class="">
                            <input type="checkbox" value="3">03
                        </label>
                        <label class="">
                            <input type="checkbox" value="4">04
                        </label>
                        <label class="">
                            <input type="checkbox" value="5">05
                        </label>
                        <label class="">
                            <input type="checkbox" value="6">06
                        </label>
                        <label class="">
                            <input type="checkbox" value="7">07
                        </label>
                        <label class="">
                            <input type="checkbox" value="8">08
                        </label>
                        <label class="">
                            <input type="checkbox" value="9">09
                        </label>
                        <label class="">
                            <input type="checkbox" value="10">10
                        </label>
                        <label class="">
                            <input type="checkbox" value="11">11
                        </label>
                        <label class="">
                            <input type="checkbox" value="12">12
                        </label>
                        <label class="">
                            <input type="checkbox" value="13">13
                        </label>
                        <label class="">
                            <input type="checkbox" value="14">14
                        </label>
                        <label class="">
                            <input type="checkbox" value="15">15
                        </label>
                        <label class="">
                            <input type="checkbox" value="16">16
                        </label>
                        <label class="">
                            <input type="checkbox" value="17">17
                        </label>
                        <label class="">
                            <input type="checkbox" value="18">18
                        </label>
                        <label class="">
                            <input type="checkbox" value="19">19
                        </label>
                        <label class="">
                            <input type="checkbox" value="20">20
                        </label>
                        <label class="">
                            <input type="checkbox" value="21">21
                        </label>
                        <label class="">
                            <input type="checkbox" value="22">22
                        </label>
                        <label class="">
                            <input type="checkbox" value="23">23
                        </label>
                        <label class="">
                            <input type="checkbox" value="24">24
                        </label>
                        <label class="">
                            <input type="checkbox" value="25">25
                        </label>
                        <label class="">
                            <input type="checkbox" value="26">26
                        </label>
                        <label class="">
                            <input type="checkbox" value="27">27
                        </label>
                        <label class="">
                            <input type="checkbox" value="28">28
                        </label>
                        <label class="">
                            <input type="checkbox" value="29">29
                        </label>
                        <label class="">
                            <input type="checkbox" value="30">30
                        </label>
                        <label class="">
                            <input type="checkbox" value="31">31
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div id="tc20" class="tab-pane fade corn_run">
            <div class="radio">
                <div class="well well-small">
                    <input type="radio" name="week" checked
                           onclick="everyTime(this)" class="pad_input">每周
                </div>
            </div>
            <div class="radio">
                <div class="well well-small">
                    <input type="radio" name="week" id="weekOfDay"
                           class="pad_input">
                    每月第<input class="week1 input_com" type="number"
                              max="4" min="1" value="1"
                              id="weekStart_1"> 周的星期<input
                        class="week1 input_com" style="width: 60px;"
                        type="number" max="7" min="1" id="weekEnd_1"
                        value="1">
                </div>
            </div>
            <div class="radio">
                <div class="well well-small">
                    <input type="radio" name="week" id="lastweek"
                           class="pad_input">每月月最后一个星期<input
                        class="input_com" type="number" max="7" min="1"
                        id="weekStart_2" value="1">
                </div>
            </div>
            <div class="radio">
                <div class="well well-small">
                    <input type="radio" name="week" id="week_appoint"
                           class="pad_input">指定
                    <div class="weekList list"
                         style="text-align:center;">
                        <label class="">
                            <input type="checkbox" id="inlineCheckbox1"
                                   name="txtWeekly" value="2">周一
                        </label>
                        <label class="">
                            <input type="checkbox" id="inlineCheckbox2"
                                   name="txtWeekly" value="3">周二
                        </label>
                        <label class="">
                            <input type="checkbox" id="inlineCheckbox3"
                                   name="txtWeekly" value="4">周三
                        </label>
                        <label class="">
                            <input type="checkbox" id="inlineCheckbox4"
                                   name="txtWeekly" value="5">周四
                        </label>
                        <label class="">
                            <input type="checkbox" id="inlineCheckbox1"
                                   name="txtWeekly" value="6">周五
                        </label>
                        <label class="">
                            <input type="checkbox" id="inlineCheckbox2"
                                   name="txtWeekly" value="7">周六
                        </label>
                        <label class="">
                            <input type="checkbox" id="inlineCheckbox3"
                                   name="txtWeekly" value="1">周日
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div id="tc30" class="tab-pane fade  corn_run">
            <div class="radio">
                <div class="well well-small">
                    <input type="radio" name="month" id="optionsRadios3"
                           checked onclick="everyTime(this)"
                           class="pad_input">每月
                </div>
            </div>
            <div class="radio">
                <div class="well well-small">
                    <input type="radio" name="month" id="optionsRadios2"
                           class="pad_input">
                    从<input class="month1  input_com"
                            style="width: 60px;" type="number" max="31"
                            min="1" value="1" id="monthStart_1">日开始，每
                    <input class="month1  input_com"
                           style="width: 60px;" type="number" max="12"
                           min="1" value="1" id="monthEnd_1">
                    个月执行一次
                </div>
            </div>
            <div class="radio">
                <div class="well well-small">
                    <input type="radio" name="month" id="month_appoint"
                           class="pad_input"> 指定月份
                    <div class="imp monthList list"
                         style="width:95%;text-align:center;">
                        <label class="">
                            <input type="checkbox" value="1"
                                   name="txtMonth">1
                        </label>
                        <label class="">
                            <input type="checkbox" value="2"
                                   name="txtMonth">2
                        </label>
                        <label class="">
                            <input type="checkbox" value="3"
                                   name="txtMonth">3
                        </label>
                        <label class="">
                            <input type="checkbox" value="4"
                                   name="txtMonth">4
                        </label>
                        <label class="">
                            <input type="checkbox" value="5"
                                   name="txtMonth">5
                        </label>
                        <label class="">
                            <input type="checkbox" value="6"
                                   name="txtMonth">6
                        </label>
                        <label class="">
                            <input type="checkbox" value="7"
                                   name="txtMonth">7
                        </label>
                        <label class="">
                            <input type="checkbox" value="8"
                                   name="txtMonth">8
                        </label>
                        <label class="">
                            <input type="checkbox" value="9"
                                   name="txtMonth">9
                        </label>
                        <label class="">
                            <input type="checkbox" value="10"
                                   name="txtMonth">10
                        </label>
                        <label class="">
                            <input type="checkbox" value="11"
                                   name="txtMonth">11
                        </label>
                        <label class="">
                            <input type="checkbox" value="12"
                                   name="txtMonth">12
                        </label>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="corn_run">
        <label>CRON表达式：</label>
        <input type="text" class="form-control" name="mycron"
               style="text-align:center;width:30%;" value="0 0 12 * * ?"
               id="mycron"/>
    </div>
    <div class="corn_succ">
        <span name="btnGenerate" class="btn btn-pinku"
              onClick="getExp()">生成</span>
    </div>
</div>
<!-- config-corn end-->