const productContainer = document.getElementById("product-container");
        const forHim = document.getElementById("for-him");
        const forHer = document.getElementById("for-her");

        // Definir productos masculinos
        const productsForHim = `
            <!-- PRIMERA FILA PRODUCTOS -->
                <div class="d-flex justify-content-between mb-5">
                    <div class="col-3">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <a href="details.html"><img src="https://www.youngla.com/cdn/shop/files/5024_black-wash_0012_03_13_deek_ecomm_2.jpg?v=1741805257&width=600" class="d-block w-100" alt="..."></a>
                                </div>
                                <div class="carousel-item">
                                    <a href="details.html"><img src="https://www.youngla.com/cdn/shop/files/5024_olive-wash_0017_03_13_deek_ecomm.jpg?v=1741806599&width=600" class="d-block w-100" alt="..."></a>
                                </div>
                                <div class="carousel-item">
                                    <a href="details.html"><img src="https://www.youngla.com/cdn/shop/files/5024_purple-wash_001_03_13_deek_ecomm.jpg?v=1741806599&width=600" class="d-block w-100" alt="..."></a>
                                </div>
                                <div class="carousel-item">
                                    <a href="details.html"><img src="https://www.youngla.com/cdn/shop/files/5024_red-wash_001_03_13_deek_ecomm.jpg?v=1741806599&width=600" class="d-block w-100" alt="..."></a>
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">5024 - Deconstructed Terry Hoodies</h1>
                            <h2 class="product-price">$52.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"><img src="https://th.bing.com/th/id/OIP.OmmItIgNJC1N9kFM64kYYAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"><img src="https://th.bing.com/th/id/OIP.D2oVGGkZSO9GY2lAF1AT8AHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"><img src="https://th.bing.com/th/id/OIP.irW1BG9vCB9nKCJAJXde2QHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(1)</h1>
                            </div>
                            
                        </div>
    
                    </div>

                    <div class="col-3">
                        <div id="carouselExampleIndicators1" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <a href="details.html"><img src="https://www.youngla.com/cdn/shop/files/1009_black-wash_003_03_13_rudy_ecomm_60a4fd92-f97b-4119-b976-a7281caa0ee6.jpg?v=1741824354&width=600" class="d-block w-100" alt="..."></a>
                                </div>
                                <div class="carousel-item">
                                    <a href="details.html"><img src="https://www.youngla.com/cdn/shop/files/1009_olive-wash_002_03_13_rudy_ecomm.jpg?v=1741805813&width=600" class="d-block w-100" alt="..."></a>
                                </div>
                                <div class="carousel-item">
                                    <a href="details.html"><img src="https://www.youngla.com/cdn/shop/files/1009_purple-wash_002_03_13_rudy_ecomm.jpg?v=1741805813&width=600" class="d-block w-100" alt="..."></a>
                                </div>
                                <div class="carousel-item">
                                    <a href="details.html"><img src="https://www.youngla.com/cdn/shop/files/1009_red-wash_002_03_13_rudy_ecomm.jpg?v=1741805813&width=600" class="d-block w-100" alt="..."></a>
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">1009 - Deconstructed Terry Shorts</h1>
                            <h2 class="product-price">$36.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"><img src="https://th.bing.com/th/id/OIP.OmmItIgNJC1N9kFM64kYYAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"><img src="https://th.bing.com/th/id/OIP.D2oVGGkZSO9GY2lAF1AT8AHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="3" aria-label="Slide 4"><img src="https://th.bing.com/th/id/OIP.irW1BG9vCB9nKCJAJXde2QHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(1)</h1>
                            </div>
                            
                        </div>
    
                    </div>
                    <div class="col-3">
                        <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.youngla.com/cdn/shop/files/5158_black_0015_03_13_johnny_ecomm.jpg?v=1741808788&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/5158_charcoal_002_03_13_johnny_ecomm.jpg?v=1741808788&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/5158_heather-grey_004_03_13_johnny_ecomm.jpg?v=1741808788&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/5158_white_004_03_13_johnny_ecomm.jpg?v=1741808788&width=600" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">5158 - Deconstructed Stencil Thermal</h1>
                            <h2 class="product-price">$38.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"><img src="https://th.bing.com/th/id/OIP.OmmItIgNJC1N9kFM64kYYAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"><img src="https://th.bing.com/th/id/OIP.D2oVGGkZSO9GY2lAF1AT8AHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 4"><img src="https://th.bing.com/th/id/OIP.irW1BG9vCB9nKCJAJXde2QHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(1)</h1>
                            </div>
                            
                        </div>
    
                    </div>

                    <div class="col-3">
                        <div id="carouselExampleIndicators3" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.youngla.com/cdn/shop/files/2009_black-wash_001_03_13_floor.jpg?v=1741806365&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/2009_charcoal-wash_001_03_13_floor.jpg?v=1741806365&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/2009_hunter-green-wash_001_03_13_floor.jpg?v=1741806365&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/2009_navy-wash_001_03_13_floor.jpg?v=1741806365&width=600" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">2009 - Faith Sweats</h1>
                            <h2 class="product-price">$55.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"><img src="https://th.bing.com/th/id/OIP.OmmItIgNJC1N9kFM64kYYAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"><img src="https://th.bing.com/th/id/OIP.D2oVGGkZSO9GY2lAF1AT8AHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="3" aria-label="Slide 4"><img src="https://th.bing.com/th/id/OIP.irW1BG9vCB9nKCJAJXde2QHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(1)</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SEGUNDA FILA PRODUCTOS -->
                <div class="d-flex justify-content-between mb-5">
                    <div class="col-3">
                        <div id="carouselExampleIndicators4" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.youngla.com/cdn/shop/files/8062_black_008.jpg?v=1741808144&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/8062_deep-teal_001.jpg?v=1741808144&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/8062_light-grey_0010.jpg?v=1741807030&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/8062_red_007.jpg?v=1741808144&width=600" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">8062 - Warrior Compression Hoodies</h1>
                            <h2 class="product-price">$40.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1" aria-label="Slide 2"><img src="https://th.bing.com/th/id/OIP.OmmItIgNJC1N9kFM64kYYAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="2" aria-label="Slide 3"><img src="https://th.bing.com/th/id/OIP.D2oVGGkZSO9GY2lAF1AT8AHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="3" aria-label="Slide 4"><img src="https://th.bing.com/th/id/OIP.irW1BG9vCB9nKCJAJXde2QHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(2)</h1>
                            </div>
                            
                        </div>
    
                    </div>

                    <div class="col-3">
                        <div id="carouselExampleIndicators5" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.youngla.com/cdn/shop/files/1022_black_001_03_13_rudy_ecomm.jpg?v=1741639766&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/1022_light-green_001_03_13_rudy_ecomm.jpg?v=1741808965&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/1022_light-grey_002_03_13_rudy_ecomm.jpg?v=1741808965&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/1022_navy_002_03_13_rudy_ecomm.jpg?v=1740602480&width=600" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">1022 - Staple Shorts 4.5"</h1>
                            <h2 class="product-price">$32.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="1" aria-label="Slide 2"><img src="https://th.bing.com/th/id/OIP.OmmItIgNJC1N9kFM64kYYAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="2" aria-label="Slide 3"><img src="https://th.bing.com/th/id/OIP.D2oVGGkZSO9GY2lAF1AT8AHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="3" aria-label="Slide 4"><img src="https://th.bing.com/th/id/OIP.irW1BG9vCB9nKCJAJXde2QHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(1)</h1>
                            </div>
                            
                        </div>
    
                    </div>
                    <div class="col-3">
                        <div id="carouselExampleIndicators6" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.youngla.com/cdn/shop/files/3041_black_003_03_13_floor.jpg?v=1741808436&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/3041_brown_003_03_13_floor.jpg?v=1741808436&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/3041_burgundy_003_03_13_floor.jpg?v=1741808436&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/3041_purple_003_03_13_floor.jpg?v=1741808436&width=600" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">3041 - Rebel Cut-Offs</h1>
                            <h2 class="product-price">$34.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="1" aria-label="Slide 2"><img src="https://th.bing.com/th/id/OIP.OmmItIgNJC1N9kFM64kYYAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="2" aria-label="Slide 3"><img src="https://th.bing.com/th/id/OIP.D2oVGGkZSO9GY2lAF1AT8AHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="3" aria-label="Slide 4"><img src="https://th.bing.com/th/id/OIP.irW1BG9vCB9nKCJAJXde2QHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(1)</h1>
                            </div>
                            
                        </div>
    
                    </div>

                    <div class="col-3">
                        <div id="carouselExampleIndicators7" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.youngla.com/cdn/shop/files/4132_black_003_03_13_floor.jpg?v=1741807318&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/4132_brown_003_03_13_floor.jpg?v=1741807215&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/4132_burgundy_003_03_13_floor.jpg?v=1741807215&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/4132_purple_003_03_13_floor.jpg?v=1741807318&width=600" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">4132 - Rebel Tees</h1>
                            <h2 class="product-price">$36.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide-to="1" aria-label="Slide 2"><img src="https://th.bing.com/th/id/OIP.OmmItIgNJC1N9kFM64kYYAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide-to="2" aria-label="Slide 3"><img src="https://th.bing.com/th/id/OIP.D2oVGGkZSO9GY2lAF1AT8AHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators7" data-bs-slide-to="3" aria-label="Slide 4"><img src="https://th.bing.com/th/id/OIP.irW1BG9vCB9nKCJAJXde2QHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(1)</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-center">
                    <button type="button" class="all-for-him-button">ALL FOR HIM</button>
                </div>
        `;

        // Definir productos femeninos
        const productsForHer = `
            <!-- PRIMERA FILA PRODUCTOS -->
            <div class="d-flex justify-content-between mb-5">
                    <div class="col-3">
                        <div id="carouselExampleIndicators8" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney0551_b9f322f3-a95a-44d2-a8c6-18bbaa889d12.jpg?v=1741717491&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/IMG_3229.jpg?v=1741717491&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney0169.jpg?v=1741717491&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/IMG-1062.jpg?v=1741719851&width=600" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">W490 Core Luxe tank</h1>
                            <h2 class="product-price">$35.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="1" aria-label="Slide 2"><img src="https://th.bing.com/th/id/OIP.OmmItIgNJC1N9kFM64kYYAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="2" aria-label="Slide 3"><img src="https://th.bing.com/th/id/OIP.D2oVGGkZSO9GY2lAF1AT8AHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators8" data-bs-slide-to="3" aria-label="Slide 4"><img src="https://th.bing.com/th/id/OIP.irW1BG9vCB9nKCJAJXde2QHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(2)</h1>
                            </div>
                            
                        </div>
    
                    </div>

                    <div class="col-3">
                        <div id="carouselExampleIndicators9" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney0864.jpg?v=1741721732&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney0729_b5aee112-d94a-473a-82b6-aaffe8096427.jpg?v=1741656849&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney0229_a8b67bbd-2068-4ebf-a230-f71359524663.jpg?v=1741721732&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/8ED0B964-EEEC-407F-BE5A-CF0768FAFFCD.jpg?v=1741721732&width=600" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators9" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">W164 Core Luxe short</h1>
                            <h2 class="product-price">$42.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators9" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators9" data-bs-slide-to="1" aria-label="Slide 2"><img src="https://th.bing.com/th/id/OIP.OmmItIgNJC1N9kFM64kYYAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators9" data-bs-slide-to="2" aria-label="Slide 3"><img src="https://th.bing.com/th/id/OIP.D2oVGGkZSO9GY2lAF1AT8AHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators9" data-bs-slide-to="3" aria-label="Slide 4"><img src="https://th.bing.com/th/id/OIP.irW1BG9vCB9nKCJAJXde2QHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(1)</h1>
                            </div>
                            
                        </div>
    
                    </div>
                    <div class="col-3">
                        <div id="carouselExampleIndicators10" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney2021_66b85c6c-651c-4316-8108-e6b76bde5b0e.jpg?v=1741715241&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney2281_2a0c1ba6-6bd4-4068-b3b8-5602bfabcb3c.jpg?v=1741715241&width=600" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators10" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">W354 Clean Girl Romper</h1>
                            <h2 class="product-price">$40.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators10" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators10" data-bs-slide-to="1" aria-label="Slide 2"><img src="https://th.bing.com/th/id/OIP.OmmItIgNJC1N9kFM64kYYAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(1)</h1>
                            </div>
                            
                        </div>
    
                    </div>

                    <div class="col-3">
                        <div id="carouselExampleIndicators11" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney2209_ca197910-9695-45ec-ae55-a24d21607fbc.jpg?v=1741656617&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney1020.jpg?v=1741656617&width=600" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators11" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">W559 Empowerment hoodie</h1>
                            <h2 class="product-price">$48.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators11" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators11" data-bs-slide-to="1" aria-label="Slide 2"><img src="https://th.bing.com/th/id/OIP.OmmItIgNJC1N9kFM64kYYAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(1)</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SEGUNDA FILA PRODUCTOS -->
                <div class="d-flex justify-content-between mb-5">
                    <div class="col-3">
                        <div id="carouselExampleIndicators12" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney0937.jpg?v=1741657300&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney1554.jpg?v=1741657300&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney1433.jpg?v=1741657300&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney1648.jpg?v=1741657298&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney1306.jpg?v=1741657300&width=600" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators12" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">W475 Divine Ribbed Tank</h1>
                            <h2 class="product-price">$22.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators12" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators12" data-bs-slide-to="1" aria-label="Slide 2"><img src="https://th.bing.com/th/id/OIP.OmmItIgNJC1N9kFM64kYYAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators12" data-bs-slide-to="2" aria-label="Slide 3"><img src="https://th.bing.com/th/id/OIP.D2oVGGkZSO9GY2lAF1AT8AHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators12" data-bs-slide-to="3" aria-label="Slide 4"><img src="https://th.bing.com/th/id/OIP.irW1BG9vCB9nKCJAJXde2QHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators12" data-bs-slide-to="4" aria-label="Slide 5"><img src="https://th.bing.com/th/id/OIP.irW1BG9vCB9nKCJAJXde2QHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(2)</h1>
                            </div>
                            
                        </div>
    
                    </div>

                    <div class="col-3">
                        <div id="carouselExampleIndicators13" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney1958_d2a85788-88cc-4e2d-bf52-722d462c437f.jpg?v=1741656433&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney1739_499a9bb0-05ea-43fa-81e1-a0e6822883df.jpg?v=1741656433&width=600" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators13" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">W276 Dominate Jeans</h1>
                            <h2 class="product-price">$48.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators13" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators13" data-bs-slide-to="1" aria-label="Slide 2"><img src="https://th.bing.com/th/id/OIP.OmmItIgNJC1N9kFM64kYYAHaEK?w=287&h=180&c=7&r=0&o=5&pid=1.7" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(1)</h1>
                            </div>
                            
                        </div>
    
                    </div>
                    <div class="col-3">
                        <div id="carouselExampleIndicators14" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.youngla.com/cdn/shop/files/socks3.jpg?v=1741717923&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/YLA-CLEANGIRL-0214.jpg?v=1740177587&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/YLA-CLEANGIRL-0199.jpg?v=1740177587&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/YLA-CLEANGIRL-0206.jpg?v=1740177587&width=600" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators14" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">W635 Staple Ankle socks (3 Pack)</h1>
                            <h2 class="product-price">$16.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators14" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(1)</h1>
                            </div>
                            
                        </div>
    
                    </div>

                    <div class="col-3">
                        <div id="carouselExampleIndicators15" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://www.youngla.com/cdn/shop/files/w631_black_001_03_11_floor.jpg?v=1741716073&width=600" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.youngla.com/cdn/shop/files/03_11_25_eComm_Maddie_Lexi_Rebecca_Tavi_Courtney2412_f88446b6-5c4e-483a-84a3-043e2c14ed25.jpg?v=1741656325&width=600" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button> -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators15" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="product-features">
                            <h1 class="product-title">W631 The Bestie</h1>
                            <h2 class="product-price">$18.00</h2>
    
                            <!-- colors -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators15" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC5ASoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQb/xAApEAEAAgECAwgCAwAAAAAAAAAAAREhMUFRkfACAzJhcbHR4XKBM1Kh/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBgf/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECIf/aAAwDAQACEQMRAD8A8QA152ID0MgBkyBYAAAFiAKAAEICiLyABAUTKgCKACAtgAFgABgAADQsAF584ReaLERRUIBAUAEUAAAEVAFADRFAQFBBeIAigGhYAFgABYAAIsCAoEggKCNsrjy5ixAlBBQABAUEBUFBBQBFALRQARQBAFJAEUABFAEUAAAABFARQAXCGOrAkAAEAMqAhlQANwBFQFwYRaAABFAARQRQsAAAQAUAAIAMgCZUQF5mQsEaxwZauBYiKgigAIqAqKAIqAoigiiALsgAqKBsIAoEACKCLsgAqKAioCiACgAAAtdWy1UBE4ggoqKIIqAqKAWgAokKAeaKBqgoIqKCKAAAIoAgoBSKgCooAigigCKAI1nzReYRA4oCgAAgCooCKgKAAgACgFEooIqKAAAH2AIoCKAIKAFIoIKAAAKhnyAkJAEVAVFAANQEFADmAilgB9CAClggoCKICgAQACKACKgBKoAoAgKAtQhzCG8gAgoBKCgAgKIAoAIqKCKACKACAKgAoICooCGVAQABQsAQAUAFtNV/YRAnf1ARUAFRQQFBFABABUVNwBQBFQBRAVBQAQFABFKAQFAQAVBQMIKAcjVbniLEkJ3QRUAFBAAUARcgIKAIAoACKgCouAEUBFtFARQAABFwgC6ooIphAUAEa60RetQiTBTfb8fe/n2/dBZ6zRSrshjIqTp+59lQFjrmfaCB1/pvChQsoGCKRsALO67C4yL8T7kCIE+JZBlV+TgCUKIuJQs/KbyIDUIpIhSn2i4hSwSolFLsqGMiqGM0tT/XtLx9Ph0u6/j7r8Ox7QsY9XH/2Q==" alt=""></button>
                            </div>
    
                            <div class="score d-flex justify-content-center align-items-center">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h1 class="reviews mb-0 ms-1">(1)</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-center">
                    <button type="button" class="all-for-him-button">ALL FOR HER</button>
                </div>
        `;

        // Mostrar productos iniciales (Hombres)
        productContainer.innerHTML = productsForHim;

        // Función para cambiar productos con animación
        function changeProducts(target, products) {
            productContainer.style.opacity = "0"; // Desvanecer contenido
            setTimeout(() => {
                productContainer.innerHTML = products; // Reemplazar contenido
                productContainer.style.opacity = "1"; // Volver a mostrar
            }, 300);

            forHim.classList.toggle("active", target === "him");
            forHer.classList.toggle("active", target === "her");
        }

        // Eventos para cambiar productos en hover con animación
        forHer.addEventListener("mouseover", () => changeProducts("her", productsForHer));
        forHim.addEventListener("mouseover", () => changeProducts("him", productsForHim));
