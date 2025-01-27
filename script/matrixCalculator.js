window.onload = () => {
    // Matrix A_box
    const frstMatrixR = {
        aMatrixX: '',
        aMatrixY: '',
        aOutMatrixBtn: '',
        aRandomMatrixBtn: '',
        aResetMatrixBtn: '',
        aClearMatrixBtn: '',
        aOutPutWrapB: '',
        aAreaMatrix: '',
        warningBtxt: '',
        rWarningBox: '',
        warningIcon: '',
        aMatrixVArr: [],
        akeyName: function (item) {
            for (let keyName in item) {
                if (document.getElementById(keyName)) {
                    item[keyName] = document.getElementById(keyName);
                }
            }
        },
        aMatrixWork: function () {
            this.aOutMatrixBtn.addEventListener('click', () => {
                // 화살표 함수 사용으로 상위 컨텍스트인 aMatrixWork 메서드의 this를 참조
                let yV = Number(this.aMatrixY.value);
                let xV = Number(this.aMatrixX.value);
                this.aAreaMatrix.innerHTML = '';
                this.aAreaMatrix.style.width = 38 * xV + 'px';
                this.aMatrixVArr = [];
                for (let y = 0; y < yV; y++) {
                    this.aMatrixVArr.push([]);
                    for (let x = 0; x < xV; x++) {
                        let aCellNum = String(y) + String(x);
                        let input =
                            '<input id="aCell' +
                            y +
                            x +
                            '" class="matrixCell" type="number" value="0" min="-99" max="99">';
                        this.aMatrixVArr[y].push(0);
                        this.aAreaMatrix.innerHTML += input;
                    }
                }
                // DOM에 값이 있을때만 배경보이게
                if (this.aAreaMatrix.innerHTML != '') {
                    this.aOutPutWrapB.style.opacity = 1;
                } else {
                    this.aOutPutWrapB.style.opacity = 0;
                }

                if (this.aMatrixX.value * this.aMatrixY.value == 0) {
                    this.rWarningBox.style.backgroundColor = '#b5dbdb';
                    this.warningBtxt.innerText =
                        'Matrix A의 행과 열을 모두 입력해주세요.';
                    this.warningIcon.style.color = '#087878';
                    setTimeout(function () {
                        this.rWarningBox.style.top = 0 + 'px';
                        setTimeout(function () {
                            calcMatrixR.rWarningBox.style.top = -40 + 'px';
                        }, 2600);
                    }, 200);
                }
            });
        },
        aMatrixData: function () {
            this.aAreaMatrix.addEventListener('change', function (event) {
                // 배열값 연동 시키기
                let value = Number(event.target.value);
                let idLen = (event.target.id.length);
                let xIdx = event.target.id[idLen - 1];
                let yIdx = event.target.id[idLen - 2];
                frstMatrixR.aMatrixVArr[yIdx][xIdx] = value;
            });
        },
        aMatrixRandomCreate: function () {
            // random_btn
            this.aRandomMatrixBtn.addEventListener('click', function (event) {
                let yV = Number(frstMatrixR.aMatrixY.value);
                let xV = Number(frstMatrixR.aMatrixX.value);
                for (let y = 0; y < yV; y++) {
                    for (let x = 0; x < xV; x++) {
                        let randomNum = Math.floor(Math.random() * 100);
                        let matrixCell = String('aCell' + y + x);
                        frstMatrixR.aMatrixVArr[y][x] = randomNum; // 배열에 담기
                        document.getElementById(matrixCell).value = randomNum; // 화면에출력
                    }
                }
            });
        },
        aMatrixResetFunc: function () {
            //reset_btn
            this.aResetMatrixBtn.addEventListener('click', function (event) {
                let yV = Number(frstMatrixR.aMatrixY.value);
                let xV = Number(frstMatrixR.aMatrixX.value);
                for (let y = 0; y < yV; y++) {
                    for (let x = 0; x < xV; x++) {
                        let matrixCell = String('aCell' + y + x);
                        frstMatrixR.aMatrixVArr[y][x] = 0;
                        document.getElementById(matrixCell).value = 0;
                    }
                }
            });
        },
        aMatrixClearFunc: function () {
            //refresh_btn
            this.aClearMatrixBtn.addEventListener('click', (event) => {
                this.aMatrixY.value = 0;
                this.aMatrixX.value = 0;
                this.aMatrixVArr = [];
                this.aAreaMatrix.innerHTML = '';
                this.aOutPutWrapB.style.opacity = 0;
            });
        },
        aMatrixXLimit: function () {
            this.aMatrixX.addEventListener('input', function (event) {
                let value = event.target.value;
                if (value <= 0) {
                    event.target.value = '';
                }
                if (value >= 9) {
                    event.target.value = value.slice(0, 1);
                }
            });
        },
        aMatrixYLimit: function () {
            this.aMatrixY.addEventListener('input', function (event) {
                let value = event.target.value;
                if (value <= 0) {
                    event.target.value = '';
                }
                if (value >= 9) {
                    event.target.value = value.slice(0, 1);
                }
            });
        },
        aSubBoxValueLimit: function () {
            this.aOutPutWrapB.addEventListener('input', function (event) {
                let value = event.target.value;
                if (value < -99) {
                    event.target.value = -99;
                }
                if (value > 99) {
                    event.target.value = 99;
                }
            });
        },
    }; //A_end

    frstMatrixR.akeyName(frstMatrixR); // DOM ID
    frstMatrixR.aMatrixData();
    frstMatrixR.aMatrixWork();
    frstMatrixR.aMatrixRandomCreate();
    frstMatrixR.aMatrixResetFunc();
    frstMatrixR.aMatrixClearFunc();
    frstMatrixR.aMatrixXLimit(); // x입력제한
    frstMatrixR.aMatrixYLimit(); // y입력제한
    frstMatrixR.aSubBoxValueLimit(); //a subBox 입력제한

    // Matrix B_box
    const scndtMatrixR = {
        bMatrixX: '',
        bMatrixY: '',
        bOutMatrixBtn: '',
        bRandomMatrixBtn: '',
        bResetMatrixBtn: '',
        bClearMatrixBtn: '',
        bOutPutWrapB: '',
        bAreaMatrix: '',
        rWarningBox: '',
        warningBtxt: '',
        warningIcon: '',
        bMatrixVArr: [],
        bkeyName: function (item) {
            for (let keyName in item) {
                if (document.getElementById(keyName)) {
                    item[keyName] = document.getElementById(keyName);
                }
            }
        },
        bMatrixWork: function () {
            this.bOutMatrixBtn.addEventListener('click', () => {
                // 화살표 함수 사용으로 상위 컨텍스트인 aMatrixWork 메서드의 this를 참조
                let yV = Number(this.bMatrixY.value);
                let xV = Number(this.bMatrixX.value);
                this.bOutPutWrapB.style.opacity = 1;
                this.bAreaMatrix.innerHTML = '';
                this.bAreaMatrix.style.width = 38 * xV + 'px';
                this.bMatrixVArr = [];
                for (let y = 0; y < yV; y++) {
                    this.bMatrixVArr.push([]);
                    for (let x = 0; x < xV; x++) {
                        let bCellNum = String(y) + String(x);
                        let input =
                            '<input id="bCell' +
                            y +
                            x +
                            '" class="matrixCell" type="number" value="0" min="-99" max="99">';
                        this.bMatrixVArr[y].push(0);
                        this.bAreaMatrix.innerHTML += input;
                    }
                }
                // DOM에 값이 있을때만 배경보이게
                if (this.bAreaMatrix.innerHTML != '') {
                    this.bOutPutWrapB.style.opacity = 1;
                } else {
                    this.bOutPutWrapB.style.opacity = 0;
                }
                if (this.bMatrixX.value * this.bMatrixY.value == 0) {
                    this.rWarningBox.style.backgroundColor = '#b5dbdb';
                    this.warningIcon.style.color = '#087878';
                    this.warningBtxt.innerText =
                        'Matrix B의 행과 열을 모두 입력해주세요.';
                    setTimeout(function () {
                        this.rWarningBox.style.top = 0 + 'px';
                        setTimeout(function () {
                            this.rWarningBox.style.top = -40 + 'px';
                        }, 2600);
                    }, 200);
                }
            });
        },
        bMatrixData: function () {
            this.bAreaMatrix.addEventListener('change', function (event) {
                // 배열값 연동 시키기
                let value = Number(event.target.value);
                let idLen = (event.target.id.length);
                let xIdx = event.target.id[idLen - 1];
                let yIdx = event.target.id[idLen - 2];
                scndtMatrixR.bMatrixVArr[yIdx][xIdx] = value;
            });
        },
        bMatrixRandomCreate: function () {
            // random_btn
            this.bRandomMatrixBtn.addEventListener('click', function (event) {
                let yV = Number(scndtMatrixR.bMatrixY.value);
                let xV = Number(scndtMatrixR.bMatrixX.value);
                for (let y = 0; y < yV; y++) {
                    for (let x = 0; x < xV; x++) {
                        let randomNum = Math.floor(Math.random() * 100);
                        let matrixCell = String('bCell' + y + x);
                        scndtMatrixR.bMatrixVArr[y][x] = randomNum; // 배열에 담기
                        document.getElementById(matrixCell).value = randomNum; // 화면에출력
                    }
                }
            });
        },
        bMatrixResetFunc: function () {
            //reset_btn
            this.bResetMatrixBtn.addEventListener('click', function (event) {
                let yV = Number(scndtMatrixR.bMatrixY.value);
                let xV = Number(scndtMatrixR.bMatrixX.value);
                for (let y = 0; y < yV; y++) {
                    for (let x = 0; x < xV; x++) {
                        let matrixCell = String('bCell' + y + x);
                        scndtMatrixR.bMatrixVArr[y][x] = 0;
                        document.getElementById(matrixCell).value = 0;
                    }
                }
            });
        },
        bMatrixClearFunc: function () {
            //refresh_btn
            this.bClearMatrixBtn.addEventListener('click', (event) => {
                this.bMatrixY.value = 0;
                this.bMatrixX.value = 0;
                this.bMatrixVArr = [];
                this.bAreaMatrix.innerHTML = '';
                this.bOutPutWrapB.style.opacity = 0;
            });
        },
        bMatrixXLimit: function () {
            this.bMatrixX.addEventListener('input', function (event) {
                let value = event.target.value;
                if (value <= 0) {
                    event.target.value = '';
                }
                if (value >= 9) {
                    event.target.value = value.slice(0, 1);
                }
            });
        },
        bMatrixYLimit: function () {
            this.bMatrixY.addEventListener('input', function (event) {
                let value = event.target.value;
                if (value <= 0) {
                    event.target.value = '';
                }
                if (value >= 9) {
                    event.target.value = value.slice(0, 1);
                }
            });
        },
        bSubBoxValueLimit: function () {
            this.bOutPutWrapB.addEventListener('input', function (event) {
                let value = event.target.value;
                if (value < -99) {
                    event.target.value = -99;
                }
                if (value > 99) {
                    event.target.value = 99;
                }
            });
        },
    }; //B_end

    scndtMatrixR.bkeyName(scndtMatrixR); // DOM ID
    scndtMatrixR.bMatrixData();
    scndtMatrixR.bMatrixWork();
    scndtMatrixR.bMatrixRandomCreate();
    scndtMatrixR.bMatrixResetFunc();
    scndtMatrixR.bMatrixClearFunc();
    scndtMatrixR.bMatrixXLimit(); // b X입력제한
    scndtMatrixR.bMatrixYLimit(); // b Y입력제한
    scndtMatrixR.bSubBoxValueLimit(); // b subbox 입력제한

    // Calculator Box
    const calcMatrixR = {
        plusCalcBtn: '',
        minusCalcBtn: '',
        multiplyCalcBtn: '',
        popupOpenBtn: '',
        popupContent: '',
        popupInputBox: '',
        popupTitle: '',
        popupTopClosebtn: '',
        popupBottomClosebtn: '',
        popupModalBg: '',
        refreshBeforeB: '',
        cOutPutWrapB: '',
        cOutPutBox: '',
        refreshActiveB: '',
        rWarningBox: '',
        warningBtxt: '',
        warningIcon: '',
        rPopupEvent: [],
        rMatrixVArr: [],
        ckeyName: function (item) {
            for (let keyName in item) {
                if (document.getElementById(keyName)) {
                    item[keyName] = document.getElementById(keyName);
                }
            }
        },
        plusBtnFunc: function () {
            this.plusCalcBtn.addEventListener('click', (event) => {
                calcMatrixR.rPopupEvent = [];
                calcMatrixR.rPopupEvent.push('Matrix Summation View');
                const AyV = Number(frstMatrixR.aMatrixY.value);
                const AxV = Number(frstMatrixR.aMatrixX.value);
                const ByV = Number(scndtMatrixR.bMatrixY.value);
                const BxV = Number(scndtMatrixR.bMatrixX.value);
                const fsArr = frstMatrixR.aMatrixVArr.length;
                const scArr = scndtMatrixR.bMatrixVArr.length;
                const RV = fsArr + scArr != 0;

                if (AyV == ByV && AxV == BxV && RV && fsArr != 0 && scArr != 0) {
                    this.cOutPutBox.innerHTML = null;
                    this.cOutPutWrapB.style.opacity = 1;
                    this.cOutPutBox.style.width = 38 * AxV + 'px';
                    this.rMatrixVArr = []; // 배열초기화
                    for (let y = 0; y < AyV; y++) {
                        this.rMatrixVArr.push([]);
                        for (let x = 0; x < AxV; x++) {
                            this.rMatrixVArr[y].push(0);
                        }
                    }

                    for (let y = 0; y < AyV; y++) {
                        for (let x = 0; x < AxV; x++) {
                            const frstV = Number(frstMatrixR.aMatrixVArr[y][x]);
                            const scndV = Number(scndtMatrixR.bMatrixVArr[y][x]);
                            this.rMatrixVArr[y][x] = frstV + scndV;
                        }
                    }

                    for (let y = 0; y < AyV; y++) {
                        for (let x = 0; x < AxV; x++) {
                            let rCellNum = String(y) + String(x);
                            let cellValue = Number(
                                calcMatrixR.rMatrixVArr[y][x]
                            ).toLocaleString('ko-KR');
                            let input = `<input id="rCell${rCellNum}" class="matrixCell" type="text" value="${cellValue}" readonly>`;
                            calcMatrixR.cOutPutBox.innerHTML += input;
                        }
                    }

                    if (this.cOutPutBox.innerHTML != '') {
                        this.cOutPutWrapB.style.opacity = 1;
                    } else {
                        this.cOutPutWrapB.style.opacity = 0;
                    }
                } else if (RV && (fsArr == 0 || scArr == 0 || AxV != BxV || AyV != ByV)) {
                    this.cOutPutBox.innerHTML = null; // DOM초기화
                    this.cOutPutWrapB.style.opacity = 0;
                    this.rWarningBox.style.backgroundColor = '#ECD2F3';
                    this.warningIcon.style.color = '#8e1d94';
                    this.warningBtxt.innerHTML =
                        'Matrix A와 B의 행렬이 동일해야 계산이 가능합니다.';
                    setTimeout(function () {
                        this.rWarningBox.style.top = 0 + 'px';
                        setTimeout(function () {
                            this.rWarningBox.style.top = -40 + 'px';
                        }, 2600);
                    }, 200);
                }
            });
        },
        minusBtnFunc: function () {
            this.minusCalcBtn.addEventListener('click', (event) => {
                calcMatrixR.rPopupEvent = [];
                calcMatrixR.rPopupEvent.push('Matrix Subtraction View');
                const AyV = Number(frstMatrixR.aMatrixY.value);
                const AxV = Number(frstMatrixR.aMatrixX.value);
                const ByV = Number(scndtMatrixR.bMatrixY.value);
                const BxV = Number(scndtMatrixR.bMatrixX.value);
                const fsArr = frstMatrixR.aMatrixVArr.length;
                const scArr = scndtMatrixR.bMatrixVArr.length;
                const RV = fsArr + scArr != 0;

                this.cOutPutBox.style.width = 38 * AxV + 'px';
                this.cOutPutBox.innerHTML = null; // DOM초기화
                this.rMatrixVArr = []; // 배열초기화
                if (AyV == ByV && AxV == BxV && RV && fsArr != 0 && scArr != 0) {
                    for (let y = 0; y < AyV; y++) {
                        this.rMatrixVArr.push([]);
                        for (let x = 0; x < AxV; x++) {
                            this.rMatrixVArr[y].push(0);
                        }
                    }

                    for (let y = 0; y < AyV; y++) {
                        for (let x = 0; x < AxV; x++) {
                            const frstV = Number(frstMatrixR.aMatrixVArr[y][x]);
                            const scndV = Number(scndtMatrixR.bMatrixVArr[y][x]);
                            this.rMatrixVArr[y][x] = frstV - scndV;
                        }
                    }

                    for (let y = 0; y < AyV; y++) {
                        for (let x = 0; x < AxV; x++) {
                            let rCellNum = String(y) + String(x);
                            let cellValue = Number(
                                calcMatrixR.rMatrixVArr[y][x]
                            ).toLocaleString('ko-KR');
                            let input = `<input id="rCell${rCellNum}" class="matrixCell" type="text" value="${cellValue}" readonly>`;
                            calcMatrixR.cOutPutBox.innerHTML += input;
                        }
                    }
                    //  cOutPutBox opacity
                    if (this.cOutPutBox.innerHTML != '') {
                        this.cOutPutWrapB.style.opacity = 1;
                    } else {
                        this.cOutPutWrapB.style.opacity = 0;
                    }
                } else if (RV && (fsArr == 0 || scArr == 0 || AxV != BxV || AyV != ByV)) {
                    this.cOutPutBox.innerHTML = null; // DOM초기화
                    this.cOutPutWrapB.style.opacity = 0;
                    this.rWarningBox.style.backgroundColor = '#ECD2F3';
                    this.warningIcon.style.color = '#8e1d94';
                    this.warningBtxt.innerHTML =
                        'Matrix A와 B의 행렬이 동일해야 계산이 가능합니다.';
                    setTimeout(function () {
                        this.rWarningBox.style.top = 0 + 'px';
                        setTimeout(function () {
                            this.rWarningBox.style.top = -40 + 'px';
                        }, 2600);
                    }, 200);
                }
            });
        },
        multiplyBtnFunc: function () {
            this.multiplyCalcBtn.addEventListener('click', (event) => {
                calcMatrixR.rPopupEvent = [];
                calcMatrixR.rPopupEvent.push('Matrix Multiplication View');
                const AyV = Number(frstMatrixR.aMatrixY.value);
                const AxV = Number(frstMatrixR.aMatrixX.value);
                const ByV = Number(scndtMatrixR.bMatrixY.value); //AxV==ByV 일때만 실행하므로 for문 조건엔 필요없음
                const BxV = Number(scndtMatrixR.bMatrixX.value);

                const fsArr = frstMatrixR.aMatrixVArr.length;
                const scArr = scndtMatrixR.bMatrixVArr.length;
                const RV = fsArr + scArr != 0;

                // 출력조건
                if (AxV == ByV && RV && fsArr != 0 && scArr != 0) { // a의 열과 b의 행이 같으면서, 두배열이 공값이 아닐때 출력
                    this.cOutPutWrapB.style.opacity = 1;
                    this.cOutPutBox.style.width = 38 * BxV + 'px';
                    this.cOutPutBox.innerHTML = null; // DOM초기화
                    this.rMatrixVArr = []; // 배열초기화

                    for (let i = 0; i < AyV; i++) {
                        calcMatrixR.rMatrixVArr.push([]);
                        for (let j = 0; j < BxV; j++) {
                            calcMatrixR.rMatrixVArr[i].push(0);
                        }
                    }

                    for (let i = 0; i < AyV; i++) {
                        let calcV = 0;
                        for (let j = 0; j < BxV; j++) {
                            for (let k = 0; k < AxV; k++) {
                                let frstV = Number(frstMatrixR.aMatrixVArr[i][k]);
                                let scndV = Number(scndtMatrixR.bMatrixVArr[k][j]);
                                calcV += frstV * scndV;
                            }
                            // calcMatrixR.rMatrixVArr[i][j] = calcV;
                            // calcV = 0;
                            calcMatrixR.rMatrixVArr[i][j] = calcV;
                            calcV = 0;
                        }
                    }

                    for (let y = 0; y < AyV; y++) {
                        for (let x = 0; x < BxV; x++) {
                            let rCellNum = String(y) + String(x);
                            let cellValue = Number(
                                calcMatrixR.rMatrixVArr[y][x]
                            ).toLocaleString('ko-KR');
                            let input = `<input id="rCell${rCellNum}" class="matrixCell" type="text" value="${cellValue}" readonly>`;
                            calcMatrixR.cOutPutBox.innerHTML += input;
                        }
                    }

                    // cOutPutWrapB
                    if (this.cOutPutBox.innerHTML != '') {
                        this.cOutPutWrapB.style.opacity = 1;
                    } else {
                        this.cOutPutWrapB.style.opacity = 0;
                    }
                } else if (RV && (fsArr == 0 || scArr == 0 || AxV != ByV)) { // 두배열이 공값이 아니면서 , (A 혹은 B의 배열이 0이거 or  a의 열과 b의 행이 다를때 )
                    this.cOutPutBox.innerHTML = null; // DOM초기화
                    this.cOutPutWrapB.style.opacity = 0;
                    this.rWarningBox.style.backgroundColor = '#ECD2F3';
                    this.warningIcon.style.color = '#8e1d94';
                    this.warningBtxt.innerHTML = 'Matrix A의 열과 B의 행이 동일해야 계산이 가능합니다.';
                    setTimeout(function () {
                        this.rWarningBox.style.top = 0 + 'px';
                        // this.warningBtxt.innerHTML = 'A의 열과 B의 행이 동일해야 계산이 가능합니다.';
                        setTimeout(function () {
                            this.rWarningBox.style.top = -40 + 'px';
                        }, 2600);
                    }, 200);

                } //if
            });
        },
        fullRefreshFunc: function () {
            this.refreshActiveB.addEventListener('click', function (event) {
                frstMatrixR.aMatrixY.value = 0;
                frstMatrixR.aMatrixX.value = 0;
                frstMatrixR.aMatrixVArr = null;
                frstMatrixR.aAreaMatrix.innerHTML = null;
                frstMatrixR.aOutPutWrapB.style.opacity = 0;

                scndtMatrixR.bMatrixY.value = 0;
                scndtMatrixR.bMatrixX.value = 0;
                scndtMatrixR.bMatrixVArr = null;
                scndtMatrixR.bAreaMatrix.innerHTML = null;
                scndtMatrixR.bOutPutWrapB.style.opacity = 0;

                calcMatrixR.rMatrixVArr = null;
                calcMatrixR.cOutPutBox.innerHTML = null;
                calcMatrixR.cOutPutWrapB.style.opacity = 0;
            });
        },
        popupTopCloseFunc: function () {
            this.popupTopClosebtn.addEventListener('click', (event) => {
                this.popupContent.style.display = 'none';
                this.popupModalBg.style.display = 'none';
            });
        },
        popupOpenFunc: function () {
            this.popupOpenBtn.addEventListener('click', (event) => {
                const AyV = this.rMatrixVArr.length;
                const BxV = this.rMatrixVArr[0].length;
                this.popupInputBox.innerHTML = '';
                this.popupInputBox.style.width = 66 * BxV + 'px';
                this.popupModalBg.style.display = 'block';
                this.popupTitle.innerText = this.rPopupEvent[0];
                this.popupContent.style.display = 'block';
                for (let y = 0; y < AyV; y++) {
                    for (let x = 0; x < BxV; x++) {
                        let pCellNum = String(y) + String(x);
                        let cellValue = Number(
                            calcMatrixR.rMatrixVArr[y][x]
                        ).toLocaleString('ko-KR');
                        let input = `<input id="pCell${pCellNum}" class="PopupCell matrixCell" type="text" value="${cellValue}" readonly>`;
                        calcMatrixR.popupInputBox.innerHTML += input;
                    }
                }
            });
        },
        popupBottomCloseFunc: function () {
            this.popupBottomClosebtn.addEventListener('click', (event) => {
                this.popupContent.style.display = 'none';
                this.popupModalBg.style.display = 'none';
            });
        },
    }; //C_end

    calcMatrixR.ckeyName(calcMatrixR); // DOM ID
    calcMatrixR.plusBtnFunc(); // +
    calcMatrixR.minusBtnFunc(); // -
    calcMatrixR.multiplyBtnFunc(); // *
    calcMatrixR.popupOpenFunc(); // Popup-Open
    calcMatrixR.fullRefreshFunc(); // ABC_fullRefresh
    calcMatrixR.popupTopCloseFunc(); // Popup-Close (TOP)
    calcMatrixR.popupBottomCloseFunc(); // Popup-Close (BOTTOM)

    const sideBar = {
        sideMainB: '',
        sideBeforeIcon: '',
        sideAfterIcon: '',
        wrapBox: '',
        skeyName: function (item) {
            for (let keyName in item) {
                if (document.getElementById(keyName)) {
                    item[keyName] = document.getElementById(keyName);
                }
            }
        },
        sideBarOutFunc: function () {
            sideBar.sideBeforeIcon.addEventListener('click', (event) => {
                sideBar.sideMainB.style.left = 0;
                this.sideBeforeIcon.style.display = 'none';
                this.sideAfterIcon.style.display = 'block';
            })
        },
        sideBarInFunc: function () {
            this.sideAfterIcon.addEventListener('click', (event) => {
                this.sideMainB.style.left = -200 + 'px';
                this.sideBeforeIcon.style.display = 'block';
                this.sideAfterIcon.style.display = 'none';
            })
        }
    }// Side_End 

    sideBar.skeyName(sideBar);
    sideBar.sideBarOutFunc();
    sideBar.sideBarInFunc();
}

