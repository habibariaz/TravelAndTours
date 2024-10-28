<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Layout</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container my-5">
        <div class="row">
            <!-- Main content area -->
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <img src="https://via.placeholder.com/600x400" class="card-img-top" alt="Post Image">
                            <div class="card-body">
                                <p class="text-muted small">February 26, 2018</p>
                                <h5 class="card-title">Free Template by Colorlib</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <img src="https://via.placeholder.com/600x400" class="card-img-top" alt="Post Image">
                            <div class="card-body">
                                <p class="text-muted small">February 26, 2018</p>
                                <h5 class="card-title">Free Template by Colorlib</h5>
                            </div>
                        </div>
                    </div>
                    <!-- Repeat for more posts -->
                </div>
            </div>

            <!-- Sidebar -->
            <div class="col-lg-4">
                <!-- Search field -->
                <div class="mb-4">
                    <div class="input-group">
                        <span class="input-group-text"><i class="bi bi-search"></i></span>
                        <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
                    </div>
                </div>

                <!-- Popular Posts -->
                <div class="mb-4">
                    <h5 class="mb-3">Popular Post</h5>
                    <div class="d-flex mb-3">
                        <img src="https://via.placeholder.com/80" alt="Thumbnail" class="me-3" style="width: 60px; height: 60px;">
                        <div>
                            <p class="text-muted small mb-1">February 27, 2018</p>
                            <a href="#" class="text-decoration-none">Free Template by Colorlib</a>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <img src="https://via.placeholder.com/80" alt="Thumbnail" class="me-3" style="width: 60px; height: 60px;">
                        <div>
                            <p class="text-muted small mb-1">February 27, 2018</p>
                            <a href="#" class="text-decoration-none">Free Template by Colorlib</a>
                        </div>
                    </div>
                    <!-- Repeat for more posts -->
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
